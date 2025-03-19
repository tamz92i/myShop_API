#!/bin/bash

# Script to build the TypeScript project

# Exit immediately if a command exits with a non-zero status
set -e

# Compile TypeScript files to JavaScript
tsc

# Optionally, you can add additional build steps here, such as copying files or optimizing assets
echo "Build completed successfully."