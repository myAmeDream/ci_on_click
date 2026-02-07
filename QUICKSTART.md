# 快速开始指南 / Quick Start Guide

## 安装和运行扩展 / Installing and Running the Extension

### 方法 1: 开发模式（推荐用于测试）/ Method 1: Development Mode (Recommended for Testing)

1. **打开项目 / Open the project**
   ```bash
   cd ci_on_click
   code .
   ```

2. **安装依赖 / Install dependencies**
   ```bash
   npm install
   ```

3. **编译扩展 / Compile the extension**
   ```bash
   npm run compile
   ```

4. **启动扩展开发主机 / Launch Extension Development Host**
   - 按 `F5` 键，或 / Press `F5`, or
   - 点击 "Run" -> "Start Debugging" / Click "Run" -> "Start Debugging"
   - 这将打开一个新的 VS Code 窗口，扩展已经加载 / This will open a new VS Code window with the extension loaded

5. **测试扩展 / Test the extension**
   在新窗口中： / In the new window:
   - 查看状态栏左侧是否有 4 个按钮（Build UT, Build Clean, Build VG, Build CI）
   - Check the status bar on the left for 4 buttons (Build UT, Build Clean, Build VG, Build CI)
   - 点击任意按钮，将在终端中执行对应命令
   - Click any button to execute the corresponding command in the terminal
   - 或者按 `Ctrl+Shift+P`，输入 "CI: Show All Commands" 查看所有命令
   - Or press `Ctrl+Shift+P` and type "CI: Show All Commands" to see all commands

### 方法 2: 打包安装 / Method 2: Package and Install

1. **安装 vsce 工具 / Install vsce tool**
   ```bash
   npm install -g @vscode/vsce
   ```

2. **打包扩展 / Package the extension**
   ```bash
   npm run compile
   vsce package
   ```
   这将生成一个 `.vsix` 文件 / This will generate a `.vsix` file

3. **安装 VSIX 文件 / Install the VSIX file**
   - 在 VS Code 中，按 `Ctrl+Shift+P` / In VS Code, press `Ctrl+Shift+P`
   - 输入 "Extensions: Install from VSIX..." / Type "Extensions: Install from VSIX..."
   - 选择生成的 `.vsix` 文件 / Select the generated `.vsix` file

## 使用扩展 / Using the Extension

### 1. 状态栏按钮 / Status Bar Buttons

扩展激活后，你会在状态栏左侧看到最多 4 个按钮：
After the extension is activated, you'll see up to 4 buttons on the left side of the status bar:

- 🧪 Build UT - 执行单元测试 / Run unit tests
- 🗑️ Build Clean - 清理构建 / Clean build
- 🐛 Build VG - 运行 Valgrind / Run Valgrind
- 🚀 Build CI - 运行 CI 流程 / Run CI pipeline

点击任意按钮即可在终端执行对应命令。
Click any button to execute the corresponding command in the terminal.

### 2. 命令面板 / Command Palette

1. 按 `Ctrl+Shift+P` (Linux/Windows) 或 `Cmd+Shift+P` (Mac)
2. 输入 "CI: Show All Commands" / Type "CI: Show All Commands"
3. 选择要执行的命令 / Select a command to execute

### 3. 自定义命令 / Customizing Commands

#### 项目级配置 / Project-level Configuration

在项目根目录创建或修改 `.vscode/settings.json`：
Create or modify `.vscode/settings.json` in your project root:

```json
{
  "ci-on-click.commands": [
    {
      "name": "你的命令名称",
      "command": "你要执行的命令",
      "icon": "$(icon-name)"
    }
  ]
}
```

#### 全局配置 / Global Configuration

1. 打开设置：`Ctrl+,` / Open settings: `Ctrl+,`
2. 搜索 "CI on Click" / Search for "CI on Click"
3. 修改配置 / Modify the configuration

## 测试扩展功能 / Testing Extension Features

### 测试默认命令 / Testing Default Commands

项目自带了一个演示 `build.sh` 脚本，你可以直接测试：
The project includes a demo `build.sh` script that you can test directly:

1. 确保 `build.sh` 有执行权限：/ Ensure `build.sh` is executable:
   ```bash
   chmod +x build.sh
   ```

2. 在 VS Code 中打开这个项目 / Open this project in VS Code

3. 点击状态栏中的按钮或使用命令面板 / Click buttons in the status bar or use the command palette

4. 观察终端输出 / Observe the terminal output

### 示例输出 / Example Output

点击 "Build UT" 按钮后，你会看到：
After clicking the "Build UT" button, you'll see:

```
==========================================
Running Unit Tests...
==========================================
✓ Test suite: Authentication
✓ Test suite: Data Processing
✓ Test suite: API Endpoints

All tests passed! ✅
```

## 配置示例 / Configuration Examples

### C/C++ 项目 / C/C++ Project

```json
{
  "ci-on-click.commands": [
    {
      "name": "Make Build",
      "command": "make",
      "icon": "$(tools)"
    },
    {
      "name": "Make Clean",
      "command": "make clean",
      "icon": "$(trash)"
    },
    {
      "name": "Run Tests",
      "command": "make test",
      "icon": "$(beaker)"
    },
    {
      "name": "Install",
      "command": "sudo make install",
      "icon": "$(desktop-download)"
    }
  ]
}
```

### Python 项目 / Python Project

```json
{
  "ci-on-click.commands": [
    {
      "name": "Run Tests",
      "command": "pytest -v",
      "icon": "$(beaker)"
    },
    {
      "name": "Coverage",
      "command": "pytest --cov",
      "icon": "$(graph)"
    },
    {
      "name": "Lint",
      "command": "pylint src/",
      "icon": "$(checklist)"
    },
    {
      "name": "Format",
      "command": "black .",
      "icon": "$(paintcan)"
    }
  ]
}
```

### Node.js/TypeScript 项目 / Node.js/TypeScript Project

```json
{
  "ci-on-click.commands": [
    {
      "name": "Dev Server",
      "command": "npm run dev",
      "icon": "$(play)"
    },
    {
      "name": "Build",
      "command": "npm run build",
      "icon": "$(tools)"
    },
    {
      "name": "Test",
      "command": "npm test",
      "icon": "$(beaker)"
    },
    {
      "name": "Lint",
      "command": "npm run lint",
      "icon": "$(checklist)"
    }
  ]
}
```

## 常见问题 / Troubleshooting

### 问题 1: 看不到状态栏按钮 / Issue 1: Status bar buttons not visible

**解决方案 / Solution:**
1. 检查设置中 `ci-on-click.showStatusBarButtons` 是否为 `true`
   Check if `ci-on-click.showStatusBarButtons` is set to `true` in settings
2. 重启 VS Code / Restart VS Code
3. 检查开发者控制台是否有错误信息（Help -> Toggle Developer Tools）
   Check the developer console for errors (Help -> Toggle Developer Tools)

### 问题 2: 命令执行失败 / Issue 2: Command execution fails

**解决方案 / Solution:**
1. 确认命令在终端中可以正常执行 / Verify the command works in terminal
2. 检查工作目录设置是否正确 / Check if the working directory is correct
3. 确认脚本文件有执行权限 / Ensure script files have execute permission

### 问题 3: 扩展未激活 / Issue 3: Extension not activated

**解决方案 / Solution:**
1. 查看输出面板中的 "Extension Host" 日志 / Check the "Extension Host" log in the output panel
2. 确认扩展已正确编译（运行 `npm run compile`）
   Verify the extension is compiled correctly (run `npm run compile`)
3. 检查 package.json 中的 activationEvents 配置
   Check the activationEvents in package.json

## 进阶使用 / Advanced Usage

### 使用环境变量 / Using Environment Variables

```json
{
  "ci-on-click.commands": [
    {
      "name": "Build Debug",
      "command": "BUILD_TYPE=debug ./build.sh",
      "icon": "$(bug)"
    },
    {
      "name": "Build Release",
      "command": "BUILD_TYPE=release ./build.sh",
      "icon": "$(rocket)"
    }
  ]
}
```

### 链式命令 / Chained Commands

```json
{
  "ci-on-click.commands": [
    {
      "name": "Full Build",
      "command": "./build.sh clean && ./build.sh ci",
      "icon": "$(sync)"
    }
  ]
}
```

### 自定义工作目录 / Custom Working Directory

```json
{
  "ci-on-click.workingDirectory": "${workspaceFolder}/build",
  "ci-on-click.commands": [
    {
      "name": "CMake Build",
      "command": "cmake --build .",
      "icon": "$(tools)"
    }
  ]
}
```

## 开发和调试 / Development and Debugging

### 监视模式 / Watch Mode

开发时可以使用监视模式自动重新编译：
During development, you can use watch mode to automatically recompile:

```bash
npm run watch
```

### 调试扩展 / Debugging the Extension

1. 在 `src/extension.ts` 中设置断点 / Set breakpoints in `src/extension.ts`
2. 按 `F5` 启动调试 / Press `F5` to start debugging
3. 在扩展开发主机窗口中触发命令 / Trigger commands in the Extension Development Host window
4. 断点会在原窗口中触发 / Breakpoints will hit in the original window

### 查看日志 / Viewing Logs

1. 在扩展开发主机窗口中打开开发者工具 / Open Developer Tools in the Extension Development Host window
   - Help -> Toggle Developer Tools
2. 查看 Console 标签页中的日志 / Check the Console tab for logs

## 贡献和反馈 / Contributing and Feedback

如果你发现问题或有改进建议，欢迎：
If you find issues or have suggestions for improvements, please:

1. 在 GitHub 上提交 Issue / Submit an issue on GitHub
2. 提交 Pull Request / Submit a pull request
3. 通过邮件联系维护者 / Contact the maintainer via email

## 参考资源 / References

- [VS Code Extension API](https://code.visualstudio.com/api)
- [VS Code Icons Reference](https://code.visualstudio.com/api/references/icons-in-labels)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
