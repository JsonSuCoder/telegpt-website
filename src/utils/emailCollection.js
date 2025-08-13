// 邮箱收集相关工具函数

// 生成设备唯一标识
export const generateDeviceFingerprint = () => {
  try {
    // 收集设备信息
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('Device fingerprint', 2, 2);
    const canvasFingerprint = canvas.toDataURL();
    
    const deviceInfo = {
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screenResolution: `${screen.width}x${screen.height}`,
      colorDepth: screen.colorDepth,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      canvas: canvasFingerprint.slice(-50), // 取canvas指纹的后50个字符
      timestamp: Date.now()
    };
    
    // 生成设备指纹哈希
    const fingerprint = btoa(JSON.stringify(deviceInfo)).replace(/[^a-zA-Z0-9]/g, '').slice(0, 32);
    return fingerprint;
  } catch (error) {
    console.error('生成设备指纹失败:', error);
    // 降级方案：使用随机字符串
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
};

// 获取或生成设备唯一标识
export const getDeviceId = () => {
  try {
    let deviceId = localStorage.getItem('device_id');
    
    if (!deviceId) {
      deviceId = generateDeviceFingerprint();
      localStorage.setItem('device_id', deviceId);
    }
    
    return deviceId;
  } catch (error) {
    console.error('获取设备ID失败:', error);
    return generateDeviceFingerprint();
  }
};

// 检查是否已收集过邮箱（基于设备唯一标识）
export const checkEmailCollected = () => {
  try {
    const deviceId = getDeviceId();
    const collected = localStorage.getItem(`email_collected_${deviceId}`);
    const collectionTime = localStorage.getItem(`collection_time_${deviceId}`);
    
    if (!collected || !collectionTime) {
      return false;
    }

    // 检查是否超过30天（可选的重新收集逻辑）
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const collectedDate = new Date(collectionTime);
    
    if (collectedDate < thirtyDaysAgo) {
      // 超过30天，清除记录
      clearEmailCollection();
      return false;
    }

    return true;
  } catch (error) {
    console.error('检查邮箱收集状态失败:', error);
    return false;
  }
};

// 清除邮箱收集记录（基于设备唯一标识）
export const clearEmailCollection = () => {
  try {
    const deviceId = getDeviceId();
    localStorage.removeItem(`email_collected_${deviceId}`);
    localStorage.removeItem(`collected_email_${deviceId}`);
    localStorage.removeItem(`collection_time_${deviceId}`);
  } catch (error) {
    console.error('清除邮箱收集记录失败:', error);
  }
};


// 标记邮箱已收集（基于设备唯一标识）
export const markEmailCollected = (email) => {
  try {
    const deviceId = getDeviceId();
    const currentTime = new Date().toISOString();
    
    localStorage.setItem(`email_collected_${deviceId}`, 'true');
    localStorage.setItem(`collected_email_${deviceId}`, email);
    localStorage.setItem(`collection_time_${deviceId}`, currentTime);
    
    return true;
  } catch (error) {
    console.error('标记邮箱已收集失败:', error);
    return false;
  }
};

// 获取用户地理位置信息（可选）
export const getUserLocation = async (ip) => {
  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();
    
    return {
      country: data.country_name,
      city: data.city,
      region: data.region,
      timezone: data.timezone
    };
  } catch (error) {
    console.error('获取地理位置失败:', error);
    return null;
  }
};

// 邮箱验证
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// 获取所有收集的邮箱数据
export const getAllEmailData = async () => {
  try {
    const response = await fetch('https://telegpt-phi.vercel.app/email-collection', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('获取邮箱数据失败:', error);
    throw error;
  }
};

// 保存邮箱数据到服务器
export const saveEmailToServer = async (emailData) => {
  try {
    const response = await fetch('https://telegpt-phi.vercel.app/email-collection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('保存到服务器失败:', error);
    throw error;
  }
};

// 保存邮箱数据到本地存储（备份）
export const saveEmailToLocal = (emailData) => {
  try {
    const existingData = JSON.parse(localStorage.getItem('email_submissions') || '[]');
    existingData.push({
      ...emailData,
      id: Date.now(),
      synced: false
    });
    localStorage.setItem('email_submissions', JSON.stringify(existingData));
    
    console.log('邮箱数据已保存到本地存储');
    return true;
  } catch (error) {
    console.error('保存到本地存储失败:', error);
    return false;
  }
};


export default {
  generateDeviceFingerprint,
  getDeviceId,
  checkEmailCollected,
  clearEmailCollection,
  markEmailCollected,
  getUserLocation,
  validateEmail,
  getAllEmailData,
  saveEmailToServer,
  saveEmailToLocal,
};