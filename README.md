# Dogfish Test Application
## Author : Sharif Malik

# Currently deployed on server
        http://test.dogfish.in

# Currently registered users are :
  USER 1:
      Username : user
      Password : user
  USER 2:
      Username : admin
      Password : admin
  USER 3:
      Username : dogfish
      Password : dogfish
  USER 4:
      Username : sharif
      Password : sharif

# Steps : to run the node js application
        npm install
        npm run

### Output : Open any browser and hit the below link
        http://localhost:8000/

### Congratulations! Application is ready to use.

#Steps involved to achieve this application :

##Step 1 : Login to server :
	a. chmod 0400 test.pem
	b. ssh -i test.pem root@test.dogfish.in

##Step 2 : Install all require application on server machine via apt-get
	i.e sudo apt-get install nodejs
	sudo apt-get install npm
	sudo apt-get install nginx -- for server

##Step 3 : Architecture setup
	 a. Created the project structure of server side
	 b. Created the project structure of frontend side

##Step 4 : Integrated auth0 from https://github.com/auth0/node-jsonwebtoken module
	 a. Integrated json web token and written Rest API for authenticating user
	 b. Tested api via POSTMAN chrome extension

##Step 5 : a. added the ui template from http://startangular.com/ --open source
	 b. clean up the template as per my requirement

##Step 6 : a. added the login authentication in UI
	 b. handling preventing of state transitions

##Step 7 :
  Written Rest API in backend for filesInfo which are present in upload directory

##Step 6 :
  Written Rest API in backend for downloading the file

##Step 8 :
  Added route middleware for token based accessing rest api

##Step 9 :
  Segregated the backend authentication of token for restricted rest api

##Step 10 :
  Consume findall rest api of file and display in ui

##Step 11 :
  Made UI for downloading the files on click of button

##Step 12 : Setup server
	a. Installed pm2 for process managing on server
	b. Configured the reverse proxy for the application

##Step 13 : Restart the nginx server

#References :

##Node JS :
	https://nodejs.org/dist/latest-v6.x/docs/api/

##Express JS :
	http://expressjs.com/en/guide/routing.html

##Auth0 JWT token :
	https://github.com/auth0/node-jsonwebtoken

##Angular JS:
	https://docs.angularjs.org/guide/introduction

##Angular Starter Theme :
	http://startangular.com/product/versatile-angularjs-theme/

##Deploy Node app on server :
	https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04

###Total Duration : 12- 13 hours approximately
