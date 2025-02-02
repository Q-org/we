# 局域网中运用 HTTPS

## 在局域网中运用 HTTPS 能够显著增强数据传输的安全性，以下是在局域网内配置 HTTPS 的详细且优化后的步骤

### 步骤一：生成自签名证书

自签名证书用于验证服务器的身份，在这个过程中，我们将使用 OpenSSL 工具来生成一个自签名的证书颁发机构（CA）。

#### 1. 生成私钥

私钥是加密过程中的关键要素，用于签署证书和加密数据。运行以下命令生成一个 2048 位的 RSA 私钥：

```bash
openssl genrsa -out myCA.key 2048
```

此命令会创建一个名为 `myCA.key` 的文件，其中包含了 2048 位的 RSA 私钥。

#### 2. 生成自签名的 CA 证书

利用刚才生成的私钥，创建一个自签名的 CA 证书。这个 CA 证书将用于签署服务器证书。执行以下命令：

```bash
openssl req -utf8 -new -x509 -key myCA.key -out myCA.cer -days 36500
```

在执行该命令时，会提示你输入一些信息，如国家、组织、通用名称等。请根据实际情况填写，这些信息将包含在证书中。此命令会生成一个有效期为 36500 天的自签名 CA 证书 `myCA.cer`。

### 步骤二：创建服务器证书

服务器证书用于在客户端和服务器之间建立安全连接，确保数据传输的安全性。

#### 1. 生成服务器的私钥

同样使用 OpenSSL 生成一个 2048 位的 RSA 私钥，用于服务器：

```bash
openssl genrsa -out server.key 2048
```

这将创建一个名为 `server.key` 的文件，作为服务器的私钥。

#### 2. 创建证书签名请求 (CSR)

证书签名请求是向 CA 申请证书时所需的文件，它包含了服务器的公钥和相关信息。执行以下命令：

```bash
openssl req -new -key server.key -out server.csr
```

执行该命令时，同样需要输入一些信息，如国家、组织、通用名称等。通用名称应填写服务器的域名或 IP 地址，确保客户端能够正确识别服务器。此命令会生成一个证书签名请求文件 `server.csr`。

#### 3. 使用 CA 证书签署服务器证书

使用之前生成的自签名 CA 证书和私钥，对服务器的证书签名请求进行签署，生成服务器证书：

```bash
openssl x509 -req -in server.csr -CA myCA.cer -CAkey myCA.key -CAcreateserial -out server.crt -days 36500
```

此命令会生成一个有效期为 36500 天的服务器证书 `server.crt`。

### 步骤三：配置 Web 服务器

以 Nginx 为例，对其配置文件进行编辑，以启用 HTTPS 功能。

#### 1. 编辑 Nginx 配置文件

打开 Nginx 的配置文件（通常位于 `/etc/nginx/sites-available` 或 `/etc/nginx/conf.d` 目录下），添加或修改以下内容：

```nginx
server {
    # 监听 443 端口，启用 SSL
    listen 443 ssl;
    # 填写服务器的域名或 IP 地址
    server_name your.domain.com;

    # 指定服务器证书的路径
    ssl_certificate /path/to/server.crt;
    # 指定服务器私钥的路径
    ssl_certificate_key /path/to/server.key;

    location / {
        # 指定网站文件的根目录
        root /path/to/your/site;
        # 指定默认的索引文件
        index index.html;
    }
}
```

请将 `your.domain.com` 替换为实际的服务器域名或 IP 地址，将 `/path/to/server.crt` 和 `/path/to/server.key` 替换为实际的服务器证书和私钥的路径，将 `/path/to/your/site` 替换为实际的网站文件根目录。

#### 2. 重新加载 Nginx 配置

完成配置文件的编辑后，需要重新加载 Nginx 配置，使配置生效：

```bash
sudo nginx -s reload
```

### 步骤四：信任自签名证书

为了避免客户端浏览器在访问 HTTPS 网站时显示警告信息，需要将自签名的 CA 证书导入到客户端浏览器的信任列表中。

#### 1. 导入 CA 证书

不同的浏览器和操作系统，导入证书的方法可能有所不同。以下是一些常见的导入方法：

- **Windows**：双击 `myCA.cer` 文件，按照提示将证书导入到“受信任的根证书颁发机构”存储区。
- **macOS**：打开“钥匙串访问”应用程序，将 `myCA.cer` 文件拖放到“系统”钥匙串中，然后双击证书，在“信任”选项中选择“始终信任”。
- **Linux**：不同的 Linux 发行版可能有不同的导入方法。一般可以将 `myCA.cer` 文件复制到 `/usr/local/share/ca-certificates/` 目录下，然后运行 `sudo update-ca-certificates` 命令更新系统的证书列表。

#### 2. 参考链接

如果你在导入证书的过程中遇到问题，可以参考以下链接获取更多帮助：

- [https://www.tangyuecan.com/2021/12/17/局域网内搭建浏览器可信任的ssl证书/](https://www.tangyuecan.com/2021/12/17/%E5%B1%80%E5%9F%9F%E7%BD%91%E5%86%85%E6%90%AD%E5%BB%BA%E6%B5%8F%E8%A7%88%E5%99%A8%E5%8F%AF%E4%BF%A1%E4%BB%BB%E7%9A%84ssl%E8%AF%81%E4%B9%A6/)
- [https://www.zhihu.com/question/514866089](https://www.zhihu.com/question/514866089)
- [https://blog.csdn.net/my_interface/article/details/112224658](https://blog.csdn.net/my_interface/article/details/112224658)

通过以上步骤，你就可以在局域网内成功配置 HTTPS，提高数据传输的安全性。

### 优化后内容

在局域网环境里，借助机器名顺利开展 ping 操作，往往意味着网络的名称解析机制运转正常。若在实际操作中碰到无法通过机器名进行 ping 的状况，以下是可能的成因及对应的解决办法：

#### 1. NetBIOS 协议问题

在多数局域网里，计算机常利用 NetBIOS 协议来完成机器名的解析工作。要是部分机器无法凭借机器名被 ping 通，那么你得检查 NetBIOS 是否处于启用状态。

- **原因**：NetBIOS 未启用会使基于该协议的机器名解析失效。
- **解决方法**：参照[这篇博客](https://blog.csdn.net/iteye_14554/article/details/81920731)中的具体步骤，检查并启用 NetBIOS。

#### 2. DNS 配置问题

当局域网中配置了 DNS 服务器时，确保每台计算机的 DNS 设置无误，同时 DNS 服务器中存在正确的主机记录是十分必要的。

- **原因**：计算机 DNS 设置错误或者 DNS 服务器里主机记录缺失、错误，都会导致机器名无法被正确解析。
- **解决方法**：可以查看[此博客](https://blog.csdn.net/weixin_43460193/article/details/114528886)，依照其中的指导，检查并修正计算机的 DNS 设置，以及确保 DNS 服务器中的主机记录准确。

#### 3. 防火墙限制问题

防火墙有时会对名称解析相关的流量进行阻拦，从而影响机器名的 ping 操作。

- **原因**：防火墙规则阻止了用于名称解析的特定端口或协议的流量。
- **解决方法**：依据[这篇技术文章](https://blog.csdn.net/iteye_14554/article/details/81920731)，调整防火墙设置，允许与名称解析相关的流量正常通过。

#### 4. 主机文件配置问题

可以在每台计算机的 hosts 文件中手动添加 IP 地址和主机名的映射关系，以此作为一种备用的名称解析方式。

- **原因**：当其他名称解析机制出现故障时，hosts 文件中的映射可以直接提供机器名和 IP 的对应关系。
- **解决方法**：参考[该博客](https://blog.csdn.net/iteye_14554/article/details/81920731)的详细说明，在每台计算机的 hosts 文件里添加正确的 IP 地址和主机名映射。

若你遭遇无法通过机器名进行 ping 的问题，可以按照上述内容逐一检查各项设置，保证它们都配置正确。如此一来，就能提升在局域网中通过机器名进行网络通信的成功率。
