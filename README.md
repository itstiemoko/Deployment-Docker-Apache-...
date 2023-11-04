# Docker deployment

- Deploy spring boot mysql on Docker
```text
###Pull mysql from docker hub
sudo docker pull ubuntu/mysql

###Create and execute mysql container
sudo docker run --name [mysql-container-name] -e TZ=UTC -p port:3306 -e MYSQL_ROOT_PASSWORD=password ubuntu/mysql:latest

###Show log of mysql container
sudo docker logs -f [mysql-container-name]

###Create network for connecting with mysql container
sudo docker network create [mysql-network-name]
sudo docker network connect [mysql-network-name] [mysql-container-name]

###Connect to docker mysql bash
sudo docker run -it --rm --network [mysql-network-name] ubuntu/mysql:latest mysql -h[mysql-container-name] -uroot -p

###Another way to connect to docker mysql bash
sudo docker exec -it [mysql-container-name] bash
	mysql -u root -p

###Stop mysql container
sudo docker stop [mysql-container-name]

###Start mysql container
sudo docker start [mysql-container-name]

###Hosting spring boot application on docker
###First configure your app properties file
###By changing host : localhost to docker ip address
### and add mysql container username and password
###Now add jar file name in your pom file > balise build
<finalName>your_jar_name</finalName>

###Make jar file
mvn clean package

###After that, create and configure a Dockerfile like this 👇
FROM openjdk:11
EXPOSE 8080
ADD target/your_jar_name.jar your_jar_name.jar
ENTRYPOINT ["java", "-jar","/your_jar_name.jar"]

###Create docker image
sudo docker build -t [docker-image-name] .

###Run docker image with mysql container
sudo docker run -p port:8080 [docker-image-name] --net [mysql-network-name] --link [mysql-container-name]

###Now we can push this image on docker hub for sharing
###First create a repo in docker hub (go to the docker hub website)
###To push an image in docker hub
sudo docker tag local-image:tagname docker-hub-username-username/repo-name:tagname
sudo docker push docker-hub-username-username/repo-name:tagname
```

- Host many docker container on Docker-compose
```text
###Exemple of docker compose file
#Docker compose version
version: '3.3'
services:
  #MYSQL SERVER Config
  mysql-gescabinet-db:
    image: ubuntu/mysql
    restart: always
    environment:
      # Password for root access
      MYSQL_ROOT_PASSWORD: 'root'
    ports:
      # <Port exposed> : < MySQL Port running inside container>
      - '30306:3306'
    #xpose:
      # Opens port 30306 on the container
      - '30306'
    networks:
      - monnet  
  #GesCabinet Backend Config
  back-gescabinet-container:
    #Path to your backend project
    build: ./apigescab	#Docker file must be in this folder
    ports:
      - 8000:8080
    depends_on:
      - mysql-gescabinet-db
    networks:
      - monnet

  #GesCabinet frontend Config
  front-gescabinet-container:
    #Path to your frontend project
    build: ./FrontEnd	#Docker file must be in this folder
    ports:
      - 8001:80
    depends_on:
      - back-gescabinet-container
    networks:
      - monnet
      
networks:
  monnet:


//Build and Run docker-copmose
sudo docker-compose up --build

//Run docker-compose
```
sudo docker-compose up
