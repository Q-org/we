# 递归删除

(Get-ChildItem -Path . -Recurse -Directory | Where-Object { $_.Name -in @("node_modules", "dist", "build", ".nx", ".next", ".docusaurus") }) | Remove-Item -Recurse -Force; Get-Item ./pnpm-lock.yaml, ./package-lock.json -ErrorAction SilentlyContinue | Remove-Item -Force

Get-ChildItem -Path . -Recurse -Directory | Where-Object { $_.Name -in @("node_modules", "dist", "build",".nx",".next",".docusaurus") } | Remove-Item -Recurse -Force

Get-ChildItem -Path . -Recurse -Directory -Filter "node_modules" | Remove-Item -Recurse -Force

Stop-Process -Id (Get-NetTCPConnection -LocalPort 82).OwningProcess -Force
yarn workspace @wei/ast-account remove tesseract
icacls "C:\dev\wei\.nx" /grant "Everyone:(F)" /T

set NODE_OPTIONS=--max-old-space-size=4096 && nx run w:build

Get-ChildItem -Path . -Recurse -ErrorAction SilentlyContinue `
| Where-Object { $_.Length -gt 100MB -and $_.FullName -notlike "*\node_modules\*" } `
| Sort-Object -Property Length -Descending

nx g @nx/eslint:convert-to-flat-config
nx g @nx/eslint:convert-to-flat-config
C:\Mongo\mongodb\bin\mongod --config C:\Mongo\mongod.conf

Get-ChildItem -Path "libs/" -Recurse -Exclude build, dist | Select-String -Pattern "requestIdleCallback"
Get-ChildItem -Recurse -Exclude build | Select-String -Pattern "requestIdleCallback"

findstr /s /i "requestIdleCallback" *.*

Remove-Item -Path "C:\dev\wei\apps\n\prisma\schema.prisma" -Force

New-Item -ItemType SymbolicLink -Path "package/q" -Target "d:/dev/q"

New-Item -ItemType SymbolicLink -Path "libs\mongo\prisma\schema.prisma" -Target "apps\n\prisma\schema.prisma"
ln -s apps\n\prisma\schema.prisma libs\mongo\prisma\schema.prisma 

Remove-Item -Path "apps/w/clientEntry.js" -Force
New-Item -ItemType SymbolicLink -Path "C:\dev\wei\src\clientEntry.js" -Target "C:\dev\wei\node_modules\@docusaurus\core\lib\client\clientEntry.js"
New-Item -ItemType SymbolicLink -Path "App.js" -Target "../../node_modules/@docusaurus/core/lib/client/App.js"

New-Item -ItemType SymbolicLink -Path "C:\dev\wei\src\mongod.conf" -Target "C:\Mongo\mongod.conf"

Remove-Item -Path "apps\n\.env.local" -Force
New-Item -ItemType SymbolicLink -Path  "apps\n\.env.local" -Target "C:\dev\wei\.env.local"
Remove-Item -Path "C:\dev\wei\apps\n\prisma\schema.prisma" -Force

New-Item -ItemType Junction -Path "packages\q" -Target "C:\dev\q"
New-Item -ItemType Junction -Path "packages\servers" -Target "C:\dev\servers"
New-Item -ItemType Junction -Path "packages\servers" -Target ".env"

# 
$excludeDirs = @("node_modules", ".pnpm")
Get-ChildItem -Path "c:\" -Directory -Recurse | Where-Object { $_.Name -eq "doc" -and ($_.FullName -notmatch ($excludeDirs -join "|")) }


Get-ChildItem -Path "C:\" -Directory -Recurse -Name

New-Item -ItemType SymbolicLink -Path "C:\dev\wei\apps\n\.env" -Target "C:\dev\wei\.env"
New-Item -ItemType SymbolicLink -Path .\src\nginx.conf -Target C:\dev\weii\servers\qng\conf\nginx.conf


# C:\dev\wei\apps\n\.env
Get-Item C:\dev\wei\apps\n\.env -Force | Select-Object -ExpandProperty LinkType


Get-ChildItem -Path "C:\path\to\directory" -Directory doc  -Recurse -Name ?

New-Item -ItemType SymbolicLink -Path "C:/Program Files (x86)/QxServer7.0/conf" -Target "C:\dev\wei\src\config\tomcat\conf"
New-Item -ItemType SymbolicLink -Path "libs\task\src\lib\ConsoleHost_history.txt" -Target "C:/Users/hi/AppData/Roaming/Microsoft/Windows/PowerShell/PSReadLine/ConsoleHost_history.txt"
New-Item -ItemType SymbolicLink -Path "libs\task\src\lib\ConsoleHost_history.txt" -Target "C:/Users/administrator/AppData/Roaming/Microsoft/Windows/PowerShell/PSReadLine/ConsoleHost_history.txt"
