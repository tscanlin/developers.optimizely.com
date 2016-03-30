#!/bin/bash
# See https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db
set -o errexit

echo "Running deploy script"

# exit if its not the master branch
if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master. No deploy."
  exit 0
fi


# config
git config --global user.email "nobody@nobody.org"
git config --global user.name "Travis CI"

# build steps (taken care of beforehand)

# deploy
cd build
git init
git add .
git commit -m "Deploy to Github Pages"
git push --force --quiet "https://${GITHUB_TOKEN}@$github.com/${GITHUB_REPO}.git" master:gh-pages > /dev/null 2>&1
