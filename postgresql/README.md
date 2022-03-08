# Instalation PostgreSQL Docker-Compose


## Getting started

## Action
- create directory `cd /var/www/postgresql.yaml`
- run `docker-compose -f postgresql.yaml up -d`
- Create Container with Resource Limits `docker container create --name prometheus --publish 5432:5432 --memory 1g --cpus 2 postgres:10 `

## start docker container
`docker container start "ID Container"`

## Running prometheus with pgAdmin4


 



