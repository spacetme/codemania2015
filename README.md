Example Chat App
================

This is the code that I have written live during Code Mania 2015 presentation, [frontend web development in 2015](http://spacet.me/codemania2015/), with these few changes:

- The background color has been changed. Green color looks really horrible.
- `package.json` and `README.md` added for easy installing.

Commits
-------

- The first commit in this branch is the boilerplate I prepared beforehand.
- The second commit is the chat application logic that I wrote during the 20-minute live-coding session (with background color changed).
- The subsequent commits are the README and package.json file.

How To
------

To install the prerequisites:

    npm install -g babel webpack webpack-dev-server

To run the server:

    cd server
    babel-node server.js

To run the webpack-dev-server:

    cd client
    webpack-dev-server --hot --inline

Notes
-----

The architecture of this application is rudimentary, and is good for hello-world kind of examples.
For larger applications, you would want to go with the Flux architecture recommended by Facebook.

