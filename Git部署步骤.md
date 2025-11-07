# Git 命令行部署到 GitHub Pages

## 📋 完整步骤

### 第一步：在 GitHub 上创建新仓库

1. 登录 GitHub：https://github.com
2. 点击右上角的 `+` 号，选择 `New repository`
3. 填写仓库信息：
    - **Repository name**: `popup-windows` (或你喜欢的名字，例如 `xinru-popup`)
    - **Description**: `温馨弹窗 - Web版` (可选)
    - **Visibility**: 选择 `Public` ⚠️ (GitHub Pages 免费版需要公开仓库)
    - **不要**勾选以下选项：
        - ❌ Initialize this repository with a README
        - ❌ Add .gitignore
        - ❌ Choose a license
4. 点击 `Create repository`

### 第二步：复制仓库地址

创建完成后，GitHub 会显示仓库页面，复制仓库的 HTTPS 地址，格式如下：

```
https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

例如：`https://github.com/aforaaron/popup-windows.git`

### 第三步：在本地初始化 Git 并推送

在终端中依次执行以下命令：

```bash
# 1. 进入项目目录
cd /Users/aaron/xinxin/弹窗/web_version

# 2. 初始化 Git 仓库
git init

# 3. 添加所有文件到暂存区
git add .

# 4. 提交文件（第一次提交）
git commit -m "Initial commit: 温馨弹窗 Web版"

# 5. 重命名分支为 main（如果还没有）
git branch -M main

# 6. 添加远程仓库（替换成你的仓库地址）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 7. 推送到 GitHub
git push -u origin main
```

**注意**：执行第 7 步时，GitHub 可能会要求你输入用户名和密码（或 Personal Access Token）。

### 第四步：启用 GitHub Pages

1. 在 GitHub 仓库页面，点击 `Settings`（设置）
2. 在左侧菜单中找到 `Pages`
3. 在 `Build and deployment` 部分：
    - **Source** 选择 `Deploy from a branch`
    - **Branch** 选择 `main`
    - **Folder** 选择 `/ (root)`
4. 点击 `Save`
5. 等待几分钟，GitHub 会显示你的网站地址：
    ```
    https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
    ```

## 🔄 后续更新代码

以后如果修改了代码，只需要执行：

```bash
cd /Users/aaron/xinxin/弹窗/web_version

# 查看修改的文件
git status

# 添加修改的文件
git add .

# 提交修改
git commit -m "更新内容描述"

# 推送到 GitHub
git push
```

GitHub Pages 会自动更新（通常需要 1-2 分钟）。

## 🔐 关于身份验证

如果 `git push` 时遇到身份验证问题，可以使用以下方法：

### 方法 1：使用 Personal Access Token（推荐）

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 点击 `Generate new token (classic)`
3. 设置权限：勾选 `repo` 权限
4. 生成后复制 token
5. 推送时，密码输入框输入 token（而不是密码）

### 方法 2：使用 SSH（更安全）

```bash
# 1. 生成 SSH 密钥（如果还没有）
ssh-keygen -t ed25519 -C "your_email@example.com"

# 2. 复制公钥
cat ~/.ssh/id_ed25519.pub

# 3. 在 GitHub → Settings → SSH and GPG keys → New SSH key 添加公钥

# 4. 使用 SSH 地址添加远程仓库
git remote set-url origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
```

## ✅ 完成检查清单

-   [ ] 在 GitHub 创建了公开仓库
-   [ ] 复制了仓库地址
-   [ ] 在本地初始化了 Git
-   [ ] 添加并提交了所有文件
-   [ ] 添加了远程仓库
-   [ ] 成功推送到 GitHub
-   [ ] 在 Settings → Pages 启用了 GitHub Pages
-   [ ] 等待几分钟后可以访问网站

## 🎉 完成！

部署完成后，你的朋友就可以通过以下链接访问：

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```
