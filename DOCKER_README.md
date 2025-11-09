/client/public/config.js - env

docker run -d -p 5000:5000 \
  -v $(pwd)/client/public/config.js:/app/dist/public/config.js:ro \
  --name b2b-landing \
  b2b-landing:latest

docker stop b2b-landing && docker rm b2b-landing