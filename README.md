# Friend Finder
This full-stack site will take in results your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

[Live](https://find-ur-friends.herokuapp.com) Heroku app.

## Start
```
#clone the repo
git clone https://github.com/monad98/FriendFinder

#change directory to repo
cd FriendFinder

# install dependencies
npm install

# change firebase config in app/firebase/index.js with your firebase config object

var config = {
    apiKey: "ThisIsFakeAPIKey",
    authDomain: "survey-35d7e.firebaseapp.com",
    databaseURL: "https://survey-35d7e.firebaseio.com",
    projectId: "survey-35d7e",
    storageBucket: "survey-35d7e.appspot.com",
    messagingSenderId: "111111111"
  };

# run
npm start
   or
npm serve
```

## Included
- [Firebase Database](https://firebase.google.com/) - cloud-hosted realtime database
- [RxJS](https://github.com/ReactiveX/rxjs) - Reactive Extensions Library for JavaScript
- [ExpressJS](https://expressjs.com) - Sinatra inspired web development framework for node.js.