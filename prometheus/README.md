# Instalation Prometheus Docker-Compose


## Getting started

## Action
- Enter directory `cd /var/www/prometheus`
- run `docker-compose -f prometheus.yml up -d`
- Create Container with Resource Limits `docker container create --name prometheus --publish 9000:9090 --memory 150m --cpus 1.5 prom/prometheus:v2.30.3 `

## start docker container
`docker container start "ID Container"`

## Running prometheus with browser
 `http://localhost:9000`



