const db = require('../firebase');
const rx = require('rxjs');

const initialFriends = [{
  "name": "Ahmed",
  "photo": "/public/images/A-WING FIGHTER.png",
  "scores": ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
}, {
  "name": "Jacob Deming",
  "photo": "/public/images/ANAKIN SKYWALKER.png",
  "scores": ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
}, {
  "name": "Jeremiah Scanlon",
  "photo": "/public/images/BAZE MALBUS.png",
  "scores": ["5", "2", "2", "2", "4", "1", "3", "2", "5", "5"]
}, {
  "name": "Louis T. Delia",
  "photo": "/public/images/BB-8 ASTROMECH DROID.png",
  "scores": ["3", "3", "4", "2", "2", "1", "3", "2", "2", "3"]
}, {
  "name": "Lou Ritter",
  "photo": "/public/images/BISTAN.png",
  "scores": ["4", "3", "4", "1", "5", "2", "5", "3", "1", "4"]
}, {
  "name": "Jordan Biason",
  "photo": "/public/images/BODHI ROOK.png",
  "scores": ["4", "4", "2", "3", "2", "2", "3", "2", "4", "5"]
}, {
  "name": "Kevin Lee",
  "photo": "/public/images/BOUSHH.png",
  "scores": ["3", "4", "3", "3", "2", "2", "3", "1", "5", "2"]
}, {
  "name": "Grimace",
  "photo": "/public/images/CHEWBACCA.png",
  "scores": ["3", "3", "3", "4", "3", "4", "3", "3", "2", "3"]
}, {
  "name": "Grimace",
  "photo": "/public/images/CLONE TROOPER LIEUTENANT.png",
  "scores": ["3", "3", "3", "4", "3", "4", "3", "3", "2", "3"]
}, {
  "name": "Grimace",
  "photo": "/public/images/EWOK.png",
  "scores": ["3", "3", "3", "4", "3", "4", "3", "3", "2", "3"]
}, {
  "name": "Bob Small",
  "photo": "/public/images/JAWA.png",
  "scores": ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
}, {
  "name": "Davey",
  "photo": "/public/images/LUKE SKYWALKER.png",
  "scores": ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
}, {
  "name": "Davey",
  "photo": "/public/images/OBI-WAN KENOBI.png",
  "scores": ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
}, {
  "name": "Davey",
  "photo": "/public/images/TASU LEECH.png",
  "scores": ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
}, {
  "name": "Ronald McDonald",
  "photo": "/public/images/UGNAUGHT.png",
  "scores": ["5", "3", "5", "1", "4", "1", "1", "1", "1", "5"]
}, {
  "name": "Kay",
  "photo": "/public/images/YODA.png",
  "scores": ["2", "2", "2", "2", "2", "2", "2", "2", "2", "2"]
}];

const friendsObservable = rx.Observable.create(observer => {
  db.ref('friends').on('value', snap => {
    if (!snap.exists()) return db.ref('friends').set(initialFriends); //save initial questions on Firebase db
    //else (if questions data exists)
    const questions = snap.val();
    observer.next(questions);
  })
});

module.exports = friendsObservable;