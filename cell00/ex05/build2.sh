#!/bin/bash

# Check for arguments
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

# Loop through each argument
for arg in "$@"
do
    if echo "$arg" | grep -qE '^[0-9]{2}$'; then
        folder="ex$arg"
        if [ -d "$folder" ]; then
            # Folder exists, do nothing
            :
        else
            mkdir "$folder"
        fi
    else
        # Invalid argument (not two digits), skip
        :
    fi
done
