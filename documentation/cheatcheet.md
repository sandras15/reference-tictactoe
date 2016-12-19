#Hagnýtt gæðastjórnun og prófanir

server 
client server - live reload vef
server side unit test
client side test
load test

Ubuntu 16.04	
Name:   hgop (i-f1efa454)64-bit11 GB40 GB
IP:      82.221.49.109 / 10.1.1.138	

ssh ubuntu@82.221.49.109	
Password: *************	

Sandra Ösp	sandras15@ru.is

###Connect to Docker deamon:
sudo usermod -aG docker ubuntu
newgrp docker

###Clean and remove NPM:
sudo rm -rf node_modules/
npm cache clean
npm install

###Run tests in root:
npm run tests

##Jenkins:

82.221.49.109:8080
admin password: ********************************

Folder:   /var/lib/jenkins/workspace/New Commit Stage Job

###Access jenkins machine:
sudo su jenkins

###Give jenkins rights to docker:
sudo usermod -aG docker jenkins
sudo su jenkins
exit
sudo service jenkins restart	#Svo að það virki

###Give rights to script:
sudo chown jenkins:jenkins docker-compose-and-run.sh

###Restart jenkins:
sudo service jenkins restart

##AWS:

ssh -i sandras15-ec2-key-pair-oregon.pem ec2-user@35.165.28.215

ec2-user@ip-172-31-33-37

ssh -i sandras15-ec2-key-pair-oregon.pem sandras15@35.165.28.215
The authenticity of host '35.165.28.215 (35.165.28.215)' can't be established.
ECDSA key fingerprint is SHA256:940yB+oq/J66H/112Lt0FNLfMLnSac0Dcj8Y26enlgI.

ssh -o StrictHostKeyChecking=no -i "./ec2_instance/sandras15-ec2-key-pair-oregon.pem" ec2-user@35.165.28.215 "cat ~/docker-compose-and-run.sh"

ssh -o StrictHostKeyChecking=no -i "./ec2_instance/${SECURITY_GROUP_NAME}.pem" ec2-user@${INSTANCE_PUBLIC_NAME} "cat ~/docker-compose-and-run.sh"

##Documentation for starting aws:

###Give instance permissions:
chmod 400 sandras15-ec2-key-pair-oregon.pem

###Login key:
ssh -i sandras15-ec2-key-pair-oregon.pem ec2-user@35.165.28.215

sudo yum update -y
sudo yum install -y docker
sudo service docker start

sudo usermod -a -G docker ec2-user
exit
#I have to exit so the settings take place

###Get docker compose so deploy script on jenkins works:
sudo curl -L "https://github.com/docker/compose/releases/download/1.9.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
docker-compose -v

###Useful commands:
chown -R 1000 [folder]
Stop docker and remove docker docker kill/stop [#name] docker rm [#name]
Log in to a running to container instance docker attach [container name or id] to get another bash instance you have to use the following command docker exec -i -t [container name] /bin/bash




