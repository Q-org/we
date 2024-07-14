# 递归删除
Get-ChildItem -Path . -Recurse -Directory -Filter "node_modules" | Remove-Item -Recurse -Force
# 
New-Item -ItemType SymbolicLink -Path "C:/dev/wei/apps/n/.env" -Target "C:/dev/wei/.env"
# C:\dev\wei\apps\n\.env
Get-Item C:\dev\wei\apps\n\.env -Force | Select-Object -ExpandProperty LinkType