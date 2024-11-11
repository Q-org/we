 set NODE_OPTIONS=--max-old-space-size=4096 && nx run w:build

$env:NODE_OPTIONS="--max-old-space-size=4096"
nx run w:build

1. 
永久设置环境变量：
你也可以通过系统设置永久增加内存限制：
•  打开“系统属性” -> “高级系统设置” -> “环境变量”。

•  在“系统变量”中，点击“新建”，然后添加 NODE_OPTIONS 变量，值为 --max-old-space-size=4096。