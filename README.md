## The Eatory

The Eatory app is website for a ficticious restaurant.
This app uses AngularJS to build a grid
of pictures showing a menu. The user can
comment on the menu items.

Images provided by http://lorempixel.com.

You can find me at my website here:
[http://tiffany.lee-russo.com](http://tiffany.lee-russo.com).

Thanks for stopping by!

## Setting up angular-seed with Express for Heroku (Nov 2016)

I wanted to start with a basic AngularJS setup with Express on Heroku.
Since most of the tutorials and Q&As for this topic are fairly old now,
here's my experience. Hopefully it can help!

1. Clone the angular-seed repo.
(If you use git clone --depth=1 https://github.com/angular/angular-seed.git <your-project-name>, Heroku requires you to "unshallow" the repo with 'git fetch --unshallow')

    ```
    git clone https://github.com/angular/angular-seed.git
    ```

2. Add express

    ```
    npm install express --save
    ```

3. Add web.js

    ```
    var express = require('express');
    var app = express();
    app.use(express.static(__dirname + '/app'));
    app.listen(process.env.PORT || 3000);
    ```

4. Add Procfile

    ```
    web: node app.js
    ```

5. Add bower to the npm dependencies so Heroku can 'bower install' on npm postinstall

    ```
    package.json

     "dependencies": {
        "bower": "^1.7.7",
        "express": "^4.14.0"
      }
    ```

6. Create your Heroku app if you haven't already

    ```
    heroku create <your-app>
    ```

7. Commit and push your changes

    ```
    git add .
    git commit
    git push heroku master
    ```
