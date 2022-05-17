SETTING UP A SERVER

- mkdir a new folder
    - git init the folder
- make a new folder called server w/ a server.js file inside it
- npm init in terminal, enter through the naming stuff
    - creates package.json
- npm install express in terminal to install express
    - will create another .json file and node_modules
        - node_modules is all the neccessary packages needed to run express
- touch .gitignore
    - creates files in which the files written inside will be ignored
    - in .gitignore type node_modules/
- do a git commit -m after this

- need to cntl + c and restart server every time I make changes

- create folder in server folder called public, this is what public will see
    - can add html css files etc here. Whatever I want to share, jpg etc.

- localhost:5000 will open the server on my computer
    - it is my public folder, there is no going out of it into my other files in the folder
    - localhost is only making request on my own computer, not for anyone else to request on their computer