@REM 1. 在您想要提取apps/n目录的目录下，打开Git命令行，输入 git init 命令，创建一个新的本地仓库 。
@REM 2. 在Git命令行中，输入 git remote add origin git@github.com:q-org/wei.git 命令，将您的本地仓库关联到远程仓库 。
@REM 3. 在Git命令行中，输入 git sparse-checkout init --cone 命令，启用稀疏检出模式 。
@REM 4. 在Git命令行中，输入 git sparse-checkout set apps/n 命令，设置您想要提取的目录 。
@REM 5. 在Git命令行中，输入 git pull origin master 命令，从远程仓库拉取apps/n目录到您的本地仓库 。
git init
git remote add origin git@github.com:q-org/wei.git
git clone --filter=blob:none git@github.com:q-org/wei.git
@REM set path=wei
@REM set project=wei
@REM set sparse=apps/n 

git clone --depth 1 --filter=blob:none git@github.com:q-org/wei.git 
git init wei
cd wei
git remote add origin git@github.com:q-org/wei.git
git remote add origin git@github.com:rapid7/metasploit-framework.git
git sparse-checkout init --cone
git sparse-checkout set apps/n
git pull origin master --depth 1

git config core.sparseCheckout

git clean -f yarn.log 


git rm yarn.log
