#!/usr/bin/env bash
PROTO_DIR=./src/proto
# Generate JavaScript
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:${PROTO_DIR} --grpc_out=${PROTO_DIR} --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` -I src/proto src/proto/pokemon.proto
# Generate TypeScript definitions
grpc_tools_node_protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts --ts_out=${PROTO_DIR} -I src/proto src/proto/pokemon.proto
