#!/bin/bash

# Liste der zusätzlichen Remotes
REMOTES=("origin" "opencode")

for remote in "${REMOTES[@]}"; do
    echo "Pushing to $remote..."
    if git push "$remote" --force-with-lease; then
        echo "Push zu $remote erfolgreich."
    else
        echo "Push zu $remote fehlgeschlagen."
    fi
done

