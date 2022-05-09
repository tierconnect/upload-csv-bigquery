#!/bin/sh

set -e

# Check for creds
if [ -z "$INPUT_APPLICATION_CREDENTIALS" ]
then
echo "Application credentials was not found. Using the configuration settings from a previous step."
else
# Decode base64 key to json file
echo "$INPUT_APPLICATION_CREDENTIALS" | base64 -d > /tmp/account.json
fi

npm install
node index.js