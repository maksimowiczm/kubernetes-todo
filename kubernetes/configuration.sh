#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

action=$1

kubectl $action -f $SCRIPT_DIR/mongo-secrets.yml
kubectl $action -f $SCRIPT_DIR/mongo-configmap.yml
kubectl $action -f $SCRIPT_DIR/api-configmap.yml
kubectl $action -f $SCRIPT_DIR/mongo.yml
kubectl $action -f $SCRIPT_DIR/mongo-express.yml
kubectl $action -f $SCRIPT_DIR/api.yml
kubectl $action -f $SCRIPT_DIR/ui.yml