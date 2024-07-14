
git config --global user.name "q-org"
git config --global user.email "382362036@qq.com"

ssh-keygen -t rsa -b 4096 -C "382362036@qq.com"
git clone git@github.com:Q-org/wei.git
git clone git@github.com:Q-org/weii.git

ssh -T  git@github.com
yarn config get globalFolder
yarn config set enableStrictSsl false -g
git am 10.18.patch

npm config set prefix D:\nodejs\node_global
npm config set cache D:\nodejs\node_cache

yarn config get registry  
npm config set registry https://registry.npmjs.org/

npm config set registry https://registry.npm.taobao.org/ --global

npm config set strict-ssl false 
yarn config get enableGlobalCache 

yarn config get globalFolder 