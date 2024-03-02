#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

minikube start

# build docker images
eval $(minikube docker-env)
$SCRIPT_DIR/build-images.sh

# apply configuration
$SCRIPT_DIR/configuration.sh apply

minikube addons enable ingress &> /dev/null &

kubectl get ingress --watch
