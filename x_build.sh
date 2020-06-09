#!/usr/bin/env bash
git add .
git commit -m "$*"
git push
echo "pushed"
yarn run build
echo "build done"
git checkout master
echo "now in master branch"
cp -a build/. .
git add .
git commit -m "$*"
git push
echo "master is pushed"
git checkout dev
echo "return to dev branch"