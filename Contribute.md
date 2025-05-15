Manual installatio  step

-install nodejs locally
clone the  repo
install dependencies (npm isntall)
-start the DB locally 
    -docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
    -go to neon.tech and get yourself a new db
-change the .env file and update your db credentials
npx prisms migrate
npx prism generate
npm run build 
npm run start

##docker installation
-install docker -'docker -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres'
-start postgres
-build the image - 'docker  build -t user-project'
start the image-'docker run -p 3000:3000 user project'

## docker compose installation steps

-install docker , docker-compose
-run 'docker-compose up'