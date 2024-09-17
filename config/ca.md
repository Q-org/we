# 加载证书

1. 加载证书：

```sh
$cert = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2("C:\Users\Administrator\AppData\Local\mkcert\rootCA.pem")
```

1. 导出证书为 PFX 格式：

```sh
$bytes = $cert.Export([System.Security.Cryptography.X509Certificates.X509ContentType]::Pkcs12, "exportpassword")
```

1. 将 PFX 文件写入磁盘：

````sh
[System.IO.File]::WriteAllBytes("C:\Users\Administrator\AppData\Local\mkcert\rootCA.pfx", $bytes)
```



2.转换 CA 证书格式：
•  使用 CertUtil 将 PEM 格式的证书转换为 PFX 格式：
```sh
certutil -exportPFX -p "exportpassword" C:\Users\Administrator\AppData\Local\mkcert\rootCA.pem C:\Users\Administrator\AppData\Local\mkcert\rootCA.pfx
```

3. 生成私钥：
```sh
$key = New-SelfSignedCertificate -DnsName "server" -CertStoreLocation "cert:\LocalMachine\My"

```
4. 生成 CSR 文件
```sh
$cert = Get-ChildItem -Path Cert:\LocalMachine\My | Where-Object { $_.Subject -like "*CN=server*" }
$csr = New-Object System.Security.Cryptography.X509Certificates.CertificateRequest("CN=server", $cert.PublicKey.Key, [System.Security.Cryptography.HashAlgorithmName]::SHA256)
$csrBytes = $csr.CreateSigningRequest()
[System.IO.File]::WriteAllBytes("C:\Users\Administrator\AppData\Local\mkcert\server.csr", $csrBytes)
```
4. 生成证书申请文件 生成 CSR 文件：
```sh
$cert = Get-ChildItem -Path Cert:\LocalMachine\My | Where-Object { $_.Subject -like "*CN=server*" }
$csr = New-Object System.Security.Cryptography.X509Certificates.CertificateRequest("CN=server", $cert.PublicKey.Key, [System.Security.Cryptography.HashAlgorithmName]::SHA256)
$csrBytes = $csr.CreateSigningRequest()
[System.IO.File]::WriteAllBytes("C:\Users\Administrator\AppData\Local\mkcert\server.csr", $csrBytes)
```


1. 生成证书申请文件
首先，您需要生成一个证书申请文件（CSR）。您可以使用 mkcert 来生成这个文件：


```sh
"D:\Program Files (x86)\Qianxue\qng\conf\cert\mkcert\mkcert" -csr -key-file rootCA-key.pem -cert-file rootCA.pem -csr-file rootCA.csr
mkcert -csr -key-file rootCA-key.pem -cert-file rootCA.pem -csr-file rootCA.csr


$csr = New-Object System.Security.Cryptography.X509Certificates.CertificateRequest("CN=server", $key, [System.Security.Cryptography.HashAlgorithmName]::SHA256)
$csrBytes = $csr.CreateSigningRequest()
[System.IO.File]::WriteAllBytes("C:\Users\Administrator\AppData\Local\mkcert\", $csrBytes)


$cert = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2("C:\Users\Administrator\AppData\Local\mkcert\rootCA.pem")
$bytes = $cert.Export([System.Security.Cryptography.X509Certificates.X509ContentType]::Pkcs12, "exportpassword")
[System.IO.File]::WriteAllBytes("C:\Users\Administrator\AppData\Local\mkcert\rootCA.pfx", $bytes)
````
