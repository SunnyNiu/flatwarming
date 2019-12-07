name: Test and Deploy

on: 
  push:
    branches:
      - master
env:
  HEROKU_API_KEY: ${{ secrets.HEROKU_API_TOKEN }}
  HEROKU_APP_NAME: "flatwarming-1"
    
jobs:
  release:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@master
    - name: login
      uses: actions/heroku@master
      with:
        args: container:login
    - name: push
      uses: actions/heroku@master
      with:
        args: container:push -a $HEROKU_APP_NAME web
    - name: release
      uses: actions/heroku@master
      with:
        args: container:release -a $HEROKU_APP_NAME web