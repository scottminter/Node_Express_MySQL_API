apt-get update

# Install Node
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install all the things
npm install

# Install nodemon separately
npm install nodemon

# Set MySQL Password
debconf-set-selections <<< 'mysql-server mysql-server/root_password password root'
debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password root'

#Install MySQL
apt-get install -y mysql-server

# alter the /etc/mysql/my.cnf
# comment out:
#   skip-external-locking
#   bind-address
# restart mysql

# create a new mysql user
# grant permissions
# mysql> CREATE USER 'finley'@'%' IDENTIFIED BY 'password';
# mysql> GRANT ALL PRIVILEGES ON *.* TO 'finley'@'%'
#    ->     WITH GRANT OPTION;

# restart mysql

# create demo_api database

# add db credentials to api config file

# start api
