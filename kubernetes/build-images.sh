#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

docker build $SCRIPT_DIR/../API -f $SCRIPT_DIR/../API/ToDo.Api/Dockerfile -t todo/api
docker build $SCRIPT_DIR/../UI -t todo/ui