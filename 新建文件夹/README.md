# 📝 做题系统 — PWA 版

纯前端做题系统，支持单选 / 多选 / 判断 / 填空 / 简答，含**错题本**功能（自动保存到本地）。

## 🚀 快速部署

### 方式一：GitHub Pages（推荐，免费）

1. 在 GitHub 新建仓库（例如 `quiz-app`）
2. 上传 **所有文件** 到仓库根目录（不要只传 HTML）：
   ```
   index.html         ← 主页面（已重命名！）
   题库数据.js
   题库数据2.js
   manifest.json
   sw.js
   .nojekyll          ← 必须！否则 GitHub Pages 会忽略下划线开头的文件
   icons/
   ```
3. 进入仓库 **Settings → Pages**，Source 选择 `main` 分支，点击 Save
4. 等1分钟后访问 **`https://你的用户名.github.io/quiz-app/`**（不需要文件名）
5. **在手机上用 Chrome 打开这个网址 → 点菜单 → "添加到主屏幕"**

> 如果还显示 404，检查是否：
> - 上传了 `.nojekyll` 文件（在电脑上可能是隐藏文件，记得显示隐藏文件）
> - 仓库 Pages 设置中 Source 选的是 `main` 而不是 `main/docs`
> - 等满了 2 分钟再刷新（GitHub Pages 部署有延迟）

### 方式二：Netlify（更简单）

1. 访问 [netlify.com](https://netlify.com)，用 GitHub 登录
2. 直接把整个文件夹拖拽到 Netlify 的部署区域
3. 等几秒就部署好了，得到一个 `xxx.netlify.app` 的地址
4. 手机上打开 → 添加到主屏幕

### 方式三：本地测试

```bash
# 用 Python 启动本地服务器（手机需在同一 Wi-Fi）
python3 -m http.server 8080

# 或 Node.js
npx serve .
```

## 📱 在安卓手机上使用

1. 用 Chrome 打开部署好的网址
2. 点击右上角菜单（三个点）
3. 选择 **"添加到主屏幕"**
4. 桌面上会出现一个图标，点开就是全屏 App 了
5. **完全离线可用** —— 首次加载后，即使没有网络也能做题

## 📂 文件说明

| 文件 | 说明 |
|------|------|
| `index.html` | 主页面（含所有逻辑，已重命名） |
| `题库数据.js` | 题库1数据 |
| `题库数据2.js` | 题库2数据 |
| `manifest.json` | PWA 配置 |
| `sw.js` | 离线缓存服务 |
| `icons/` | 应用图标 |
| `README.md` | 本文件 |

## ✨ 功能

- ✅ 单选 / 多选 / 判断 / 填空 / 简答 五种题型
- ✅ 双题库切换
- ✅ 错题本自动保存（不随刷新丢失）
- ✅ 错题练习模式（只做错题）
- ✅ 随机出题顺序
- ✅ 完成统计与错题回顾
- ✅ PWA 离线支持
