# src\doc\docker\mariadb-entrypoint.sh
#!/bin/bash
set -e

# 初始化数据库，仅在第一次启动时执行
if [ ! -d /var/lib/mysql/mysql ]; then
  echo "Initializing database..."
  mysql_install_db --user=mysql --datadir=/var/lib/mysql
  echo "Database initialized."
fi

# 设置 root 密码
mysql -u root -e "ALTER USER 'root'@'localhost' IDENTIFIED BY '$MARIADB_ROOT_PASSWORD';"
mysql -u root -e "FLUSH PRIVILEGES;"


# 启动 MariaDB
exec mysqld_safe --user=mysql