# 温馨弹窗 - Web 版

这是温馨弹窗程序的网页版本，可以在浏览器中运行。

## 功能特点

-   ✅ 点击按钮开始弹窗
-   ✅ 弹窗在网页范围内随机位置显示
-   ✅ 30 秒后自动停止创建新弹窗
-   ✅ 再等 30 秒后自动关闭所有弹窗
-   ✅ 每个弹窗都有对比色文字，清晰可见
-   ✅ 点击单个弹窗可以提前关闭

## 使用方法

### 方法 1：直接打开（推荐）

直接在浏览器中打开 `index.html` 文件：

```bash
# macOS
open index.html

# 或者在文件管理器中双击 index.html
```

### 方法 2：使用本地服务器（推荐用于开发）

使用 Python 内置服务器：

```bash
# Python 3
python3 -m http.server 8000

# 然后在浏览器访问
# http://localhost:8000
```

或者使用 Node.js 的 http-server：

```bash
npx http-server -p 8000
```

## 文件说明

-   `index.html` - 主页面
-   `style.css` - 样式文件
-   `script.js` - JavaScript 逻辑
-   `README.md` - 说明文档

## 与 Python 版本的区别

| 特性     | Python 版本           | Web 版本       |
| -------- | --------------------- | -------------- |
| 运行环境 | 需要 Python + Tkinter | 只需浏览器     |
| 弹窗范围 | 整个屏幕              | 浏览器窗口内   |
| 跨平台   | 需要安装 Python       | 任何现代浏览器 |
| 性能     | 受系统限制            | 受浏览器限制   |

## 🌐 部署到 GitHub Pages

想要让朋友在任何地方都能访问这个网站？可以使用 GitHub Pages 免费托管！

### 快速部署步骤：

1. **创建 GitHub 仓库**（必须是公开的）
2. **上传文件**到仓库
3. **启用 GitHub Pages**：
    - 进入仓库 Settings → Pages
    - Source 选择 `Deploy from a branch`
    - Branch 选择 `main`，Folder 选择 `/ (root)`
    - 保存后几分钟内即可访问

详细步骤请查看 [`部署指南.md`](./部署指南.md)

部署后的访问地址：

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## 注意事项

-   弹窗数量过多可能导致浏览器卡顿
-   建议在较新的浏览器中使用（Chrome、Firefox、Safari、Edge）
-   如果浏览器卡顿，可以刷新页面
