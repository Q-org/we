在 Windows 10 或 Windows 11 上使用 WSL（Windows Subsystem for Linux）安装 Ubuntu 非常简单。以下是详细步骤：

<https://www.bing.com/search?form=SKPBOT&q=%E5%90%AF%E7%94%A8%20WSL>:
• 打开 PowerShell 并以管理员身份运行。
• 输入以下命令以启用 WSL 和虚拟机平台：

dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

• 重启电脑。

<https://www.bing.com/search?form=SKPBOT&q=%E5%AE%89%E8%A3%85%20WSL%202>:
• 在 PowerShell 中输入以下命令以设置 WSL 2 为默认版本：
wsl --set-default-version 2

<https://www.bing.com/search?form=SKPBOT&q=%E5%AE%89%E8%A3%85%20Ubuntu>:
• 打开 Microsoft Store，搜索 “Ubuntu” 并选择你想要的版本（例如 Ubuntu 20.04 LTS）。
• 点击 “获取” 并安装。

<https://www.bing.com/search?form=SKPBOT&q=%E8%AE%BE%E7%BD%AE%20Ubuntu>:
• 安装完成后，打开 Ubuntu 应用程序。
• 按提示设置用户名和密码。

<https://www.bing.com/search?form=SKPBOT&q=%E6%9B%B4%E6%96%B0%E5%92%8C%E5%8D%87%E7%BA%A7%20Ubuntu>:
• 打开 Ubuntu 终端，输入以下命令以更新和升级软件包：
sudo apt update
sudo apt upgrade

这样，你就可以在 Windows 上使用 Ubuntu 了。如果你需要安装桌面环境或其他软件，可以继续在终端中使用 apt 命令进行安装。

如果在安装过程中遇到任何问题，可以参考 <https://learn.microsoft.com/zh-cn/windows/wsl/install> <https://learn.microsoft.com/zh-cn/windows/wsl/install。需要进一步帮助吗？>
