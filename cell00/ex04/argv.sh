#!/bin/bash

case $# in
    0)
        echo "No arguments supplied"
        ;;
    1|2|3)
        count=$#
        while [ $count -gt 0 ]; do
            echo "$1"
            shift
            count=$((count - 1))
        done
        ;;
    *)
        # Only handle the first 3 arguments
        count=3
        while [ $count -gt 0 ]; do
            echo "$1"
            shift
            count=$((count - 1))
        done
        ;;
esac

