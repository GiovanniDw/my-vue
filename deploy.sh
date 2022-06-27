#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

# navigate into the build output directory
# cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# git init
# git checkout -b main
# git add -A
# git commit -m 'deploy'

git add docs -f
git commit -m "deploy"
# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git subtree push --prefix dist origin gh-pages
# git push -f git@github.com:giovannidw/my-vue.git main:gh-pages

# cd -

git subtree push --prefix docs origin main