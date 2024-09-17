# ubantu

是的，看起来你的虚拟机已经成功创建并处于关闭状态。接下来，你需要启动虚拟机并安装Ubuntu。以下是详细步骤：

## 启动虚拟机并安装Ubuntu

1. 启动虚拟机：
   • 在PowerShell中运行以下命令启动虚拟机：

Start-VM -Name "UbuntuVM"

1. 连接到虚拟机：
   • 打开Hyper-V管理器，找到“UbuntuVM”虚拟机。

• 右键点击虚拟机，选择“连接”。

1. 安装Ubuntu：
   • 在连接窗口中，虚拟机会启动并加载你之前指定的Ubuntu ISO文件。

创建具有更多资源的虚拟机

1. 打开PowerShell：
   • 以管理员身份打开PowerShell。
2. 创建虚拟机：
   • 使用以下命令创建一个新的虚拟机，并分配更多的内存和硬盘空间。例如，分配16GB内存和100GB硬盘：
   win R12 虚拟机

```sh
New-VM -Name "UbuntuVM" -MemoryStartupBytes 16GB -NewVHDPath "d:\HyperV\Virtual Hard Disks\UbuntuVM.vhdx" -NewVHDSizeBytes 200GB -Path "d:\HyperV\Virtual Machines"

```

1. 配置虚拟机网络：
   • 添加网络适配器并连接到虚拟交换机：

Add-VMNetworkAdapter -VMName "UbuntuVM" -SwitchName "Default Switch"

1. 启动虚拟机：
   • 启动虚拟机：

Start-VM -Name "UbuntuVM"

修改现有虚拟机的资源
如果你已经创建了虚拟机，可以通过以下步骤修改其内存和硬盘大小：

1. 关闭虚拟机：
   • 确保虚拟机处于关闭状态：

Stop-VM -Name "UbuntuVM"

1. 修改内存：
   • 修改虚拟机的内存大小：

Set-VMMemory -VMName "UbuntuVM" -StartupBytes 16GB

1. 修改硬盘大小：
   • 扩展虚拟硬盘大小：

Resize-VHD -Path "C:\HyperV\Virtual Hard Disks\UbuntuVM.vhdx" -SizeBytes 100GB

1. 启动虚拟机：
   • 重新启动虚拟机：

Start-VM -Name "UbuntuVM"
