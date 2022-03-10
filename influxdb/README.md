# Instalation InfluxDB 2.0 with Docker Image


## Getting started

## Action
- $ docker run -p 8086:8086 \
-    -v influxdb:/root/influxdb/data \
-    -v influxdb2:/var/lib/influxdb2 \
-    -v influxdb2-config:/etc/influxdb2 \
-    -v $PWD/influxdb.conf:/root/influxdb/influxdb.conf \
-    -e DOCKER_INFLUXDB_INIT_MODE=upgrade \
-    -e DOCKER_INFLUXDB_INIT_USERNAME=my-user \
-    -e DOCKER_INFLUXDB_INIT_PASSWORD=my-password \
-    -e DOCKER_INFLUXDB_INIT_ORG=my-org \
-    -e DOCKER_INFLUXDB_INIT_BUCKET=my-bucket \
-    -e DOCKER_INFLUXDB_INIT_UPGRADE_V1_CONFIG=/root/influxdb/influxdb.conf \
-    influxdb:2.0


## create container resource limits
`docker container create --name influxdb --publish 8086:8086 --memory 250m --cpus 1.5 influxdb:2.0 `

## start docker container
`docker container start "ID Container"`

## Running InfluxDB with Browser
`http://localhost:8086`
![image](https://user-images.githubusercontent.com/64342247/157626999-81c79f23-945d-45d6-829c-06766285b73f.png)

