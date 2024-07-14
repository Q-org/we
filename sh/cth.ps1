[Environment]::SetEnvironmentVariable("INCLUDE", "C:/Program Files (x86)/Windows Kits/10/Include/10.0.20348.0/ucrt;C:/Program Files (x86)/Windows Kits/10/Include/10.0.22621.0/ucrt;C:/Program Files (x86)/Windows Kits/10/Include/10.0.19041.0/ucrt", [EnvironmentVariableTarget]::Machine)


# 设置环境变量，以便编译器能够找到头文件
rustflags = ["-C", "link-args=-IC:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.20348.0\\ucrt", "-C", "link-args=-IC:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.22621.0\\ucrt", "-C", "link-args=-IC:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.19041.0\\ucrt"]


C:/Program Files (x86)/Windows Kits/10/Include/10.0.20348.0/ucrt
C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Tools\MSVC