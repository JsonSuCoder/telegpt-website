import React, { useState, useEffect } from 'react';
import './app-download.scss';
import backgroundImage from '../assets/app-download/background-image.png';
import windowIcon from '../assets/app-download/window.png';
import downloadIcon from '../assets/app-download/download.png';
import appStoreIcon from '../assets/app-download/appstore.png';
import macIcon from '../assets/app-download/mac.png';
import appScreenImg from '../assets/app-download/app-main-screen.png';

 async function getMacArchUserAgentData() {
        if (navigator.userAgentData) {
          // userAgentData.getHighEntropyValues 可请求额外信息
          const highEntropy =
            await navigator.userAgentData.getHighEntropyValues([
              "architecture",
            ]);
          return highEntropy.architecture; // "arm" 或 "x86"
        }
        return null;
      }

const AppDownload = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // 组件挂载后触发动画
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const handleDownloadWin = ()=>{
        // 下载Windows安装包
        const link = document.createElement('a');
        link.href = '/package/TeleGPT-x64.exe';
        link.download = 'TeleGPT-x64.exe';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
    const handleDownloadMac = async ()=>{
        // 检测Mac芯片类型
        let architecture = await getMacArchUserAgentData();
        
        // 如果无法检测到架构，尝试通过navigator.platform判断
        if (!architecture) {
            const platform = navigator.platform.toLowerCase();
            if (platform.includes('arm') || platform.includes('aarch64')) {
                architecture = 'arm';
            } else {
                architecture = 'x86';
            }
        }
        
        // 根据芯片类型选择对应的安装包
        const fileName = architecture === 'arm' ? 'TeleGPT-arm64.dmg' : 'TeleGPT-x64.dmg';
        
        const link = document.createElement('a');
        link.href = `/package/${fileName}`;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const handleDownloadOS = async ()=>{
        // window.location.href = "https://apps.apple.com/us/app/telegpt/id6748808892?l=zh-Hans-CN";
        window.alert("Coming soon...")
    }

    return (
        <div className={`app-download-container ${isVisible ? 'slide-up-enter' : 'slide-up-initial'}`}>
            <div className="download-header">
                <div className="background-image-container">
                    <img src={backgroundImage} alt="Background" className="background-cover-image" />
                </div>

                <div className="content-wrapper">
                    <div className="text-content">
                        <h1 className="main-heading">
                            <span className="heading-text">Message Smarter with </span>
                            <span className="ai-text">AI.</span>
                        </h1>
                        <h1 className="sub-heading">Achieve More.</h1>
                        <p className="description">
                            Supercharge your Telegram chats with AI-driven features for work and everyday life.
                        </p>
                    </div>
                    {/* download */}
                    <div className='download-buttons-wrapper'>
                        <div className='download-button-container desktop-only'>
                            <button className='download-button' onClick={handleDownloadWin}>
                                <img src={windowIcon} alt='Windows' className='button-icon' />
                                <img src={downloadIcon} alt='Download' className='button-icon-hover' />
                                <span className='button-text'>Windows</span>
                                <span className='button-text-hover'>Download</span>
                            </button>
                        </div>
                        <div className='download-button-container desktop-only'>
                            <button className='download-button' onClick={handleDownloadMac}>
                                <img src={appStoreIcon} alt='App Store' className='button-icon' />
                                <img src={downloadIcon} alt='Download' className='button-icon-hover' />
                                <span className='button-text'>MacOS</span>
                                <span className='button-text-hover'>Download</span>
                            </button>
                        </div>
                        <div className='download-button-container desktop-only'>
                            <button className='download-button' onClick={handleDownloadOS}>
                                <img src={macIcon} alt='iOS' className='button-icon' />
                                <img src={downloadIcon} alt='Download' className='button-icon-hover' />
                                <span className='button-text'>iOS</span>
                                <span className='button-text-hover'>Download</span>
                            </button>
                        </div>
                        <div className='download-button-container mobile-only'>
                            <button className='download-button mobile-only' onClick={handleDownloadOS}>
                                <img src={macIcon} alt='iOS' className='button-icon' />
                                <div className='button-text-container'>
                                    <span >Download on the</span>
                                    <span >App Store</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='app-screen-container'>
                        <img className='app-screen-image' src={appScreenImg} alt="App Screenshot" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDownload;