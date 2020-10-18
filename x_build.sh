#!/usr/bin/env bash
git add .
git commit -m "$*"
git push
git push -f githubIo dev
echo "**********************************pushed"
yarn run build
echo "**********************************build done"
git checkout master
echo "**********************************now in master branch"
sleep 1
rm *.txt
rm *.json
rm *.js
rm *.html
rm -r static
echo "**********************************removed old files"
cp -a build/. .
git add .
git commit -m "$*"
git push
git push githubIo master
echo "**********************************master is pushed"
git checkout dev
echo "**********************************return to dev branch"