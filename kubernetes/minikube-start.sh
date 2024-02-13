#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

minikube start

minikube dashboard &>/dev/null &

# build docker images
eval $(minikube docker-env)
$SCRIPT_DIR/build-images.sh

# apply configuration
$SCRIPT_DIR/configuration.sh apply

echo Going to sleep for 30 seconds...
sleep 30

# enable services
echo api $(minikube service api-service --url)
echo ui $(minikube service ui-service --url)
echo mongo-express $(minikube service mongo-express-service --url)