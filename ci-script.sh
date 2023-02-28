docker logout 
docker login -u "1681997" -p "Freedom@2468"

docker build -t udagram-api-feed ./udagram-api-feed
docker build -t udagram-api-user ./udagram-api-user
docker build -t reverseproxy ./udagram-reverseproxy
docker build -t udagram-frontend ./udagram-frontend

docker tag udagram-api-feed 1681997/udagram-api-feed:v1
docker tag udagram-api-user 1681997/udagram-api-user:v1
docker tag reverseproxy 1681997/reverseproxy:v1
docker tag udagram-frontend 1681997/udagram-frontend:v1

# docker tag latest 1681997/reverseproxy:latest
docker push 1681997/reverseproxy:v1
docker push 1681997/udagram-api-user:v1
docker push 1681997/udagram-api-feed:v1
docker push 1681997/udagram-frontend:v1

