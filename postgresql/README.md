# Instalation PostgreSQL Docker-Compose


## Getting started

## Action
- create directory `cd /var/www/postgresql.yaml`
- run `docker-compose -f postgresql.yaml up -d`
- Create Container with Resource Limits `docker container create --name prometheus --publish 5432:5432 --memory 1g --cpus 2 postgres:10 `

## start docker container
`docker container start "ID Container"`

## Running PostgreSQL with pgAdmin4
![image](https://user-images.githubusercontent.com/64342247/157355316-352f759c-7b14-48f8-a223-e654f214c092.png)




 



