#!/bin/bash

# Build the project
npm run build

# Navigate into the build output directory
cd dist

# If you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# If you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/CABLord/uplink-game-renewed.git master:gh-pages

cd ..
