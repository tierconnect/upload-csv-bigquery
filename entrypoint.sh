#!/bin/sh

set -e

output=$(env)
# set
echo "$output" > "${HOME}/${GITHUB_ACTION}.log"
echo "$output"
pwd
output="INFO > CHECKING CREDENTIALS"
echo "$output" > "${HOME}/${GITHUB_ACTION}.log"
echo "$output"

# Check for creds
if [ -z "$INPUT_APPLICATION_CREDENTIALS" ]
then
echo "Application credentials was not found. Using the configuration settings from a previous step."
else
# Decode base64 key to json file
echo "$INPUT_APPLICATION_CREDENTIALS" | base64 -d > /tmp/account.json
fi

output="INFO > UPLOADING.."
echo "$output" > "${HOME}/${GITHUB_ACTION}.log"
echo "$output"

npm install
node index.js
