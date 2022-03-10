# Instalation InfluxDB 2.0 with Docker Image


## Getting started

## Action
- $ docker run -p 8086:8086 \
-   -v influxdb:/var/lib/influxdb \
-   -v influxdb2:/var/lib/influxdb2 \
-   -e DOCKER_INFLUXDB_INIT_MODE=upgrade \
-   -e DOCKER_INFLUXDB_INIT_USERNAME=my-user \
-   -e DOCKER_INFLUXDB_INIT_PASSWORD=my-password \
-   -e DOCKER_INFLUXDB_INIT_ORG=my-org \
-   -e DOCKER_INFLUXDB_INIT_BUCKET=my-bucket \
-   influxdb:2.0


## create container resource limits
`docker container create --name influxdb --publish 8086:8086 --memory 250m --cpus 1.5 influxdb:2.0 `

## start docker container
`docker container start "ID Container"`

## Running InfluxDB with Browser
`http://localhost:8086`
![image](https://user-images.githubusercontent.com/64342247/157626999-81c79f23-945d-45d6-829c-06766285b73f.png)

