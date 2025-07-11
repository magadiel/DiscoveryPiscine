#!/bin/bash

# Check if no arguments were passed
[ $# -eq 0 ] && echo "No arguments supplied" && exit 1

# Loop through provided arguments
for arg in "$@"; do
    # Ensure arg matches two-digit numeric format - extra
    case $arg in
        [0-9][0-9])
            folder="ex$arg"
            [ -d "$folder" ] || mkdir "$folder"
            ;;
        *)
            # Ignore args that aren't two-digit numbers
            continue
            ;;
    esac
done
