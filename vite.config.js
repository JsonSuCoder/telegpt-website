import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-files',
      writeBundle() {
        // 确保dist目录存在
        const distDir = resolve(__dirname, 'dist');
        const packageSrcDir = resolve(__dirname, 'package');
        const packageDistDir = resolve(distDir, 'package');
        
        // 创建目标目录
        if (!existsSync(packageDistDir)) {
          mkdirSync(packageDistDir, { recursive: true });
        }
        
        // 复制安装包文件
        try {
          copyFileSync(resolve(packageSrcDir, 'TeleGPT-x64.exe'), resolve(packageDistDir, 'TeleGPT-x64.exe'));
          copyFileSync(resolve(packageSrcDir, 'TeleGPT-arm64.dmg'), resolve(packageDistDir, 'TeleGPT-arm64.dmg'));
          copyFileSync(resolve(packageSrcDir, 'TeleGPT-x64.dmg'), resolve(packageDistDir, 'TeleGPT-x64.dmg'));
          console.log('Package files copied to dist successfully!');
        } catch (error) {
          console.error('Error copying package files:', error);
        }
        
        // 复制SEO文件到根目录
        const seoFiles = ['sitemap.xml', 'robots.txt'];
        
        seoFiles.forEach(file => {
          const srcFile = resolve(__dirname, file);
          const destFile = resolve(distDir, file);
          
          if (existsSync(srcFile)) {
            try {
              copyFileSync(srcFile, destFile);
              console.log(`Copied ${file} to dist root`);
            } catch (error) {
              console.error(`Error copying ${file}:`, error);
            }
          }
        });
        
        console.log('SEO files copied to dist root successfully!');
      }
    }
  ],
  // 配置静态资源处理
  assetsInclude: ['**/*.dmg', '**/*.exe'],
  build: {
    // 确保大文件也能被正确处理
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        // 保持文件名不变
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && (assetInfo.name.endsWith('.dmg') || assetInfo.name.endsWith('.exe'))) {
            return 'src/package/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
})
