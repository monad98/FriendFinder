const db = require('../firebase/index.js');
const friends$ = require('../data/friends');
let friends = [];
friends$.subscribe(friendsArr => friends = friendsArr);

// GET /api/friends
const list = (req, res, next) => res.json(friends);

// POST /api/friends
const getCompatibleFriends = (req, res, next) => {
  const { name, photo, scores } = req.body;
  const totalDifferences = friends.map(friend => {
    return {
      name: friend.name,
      photo: friend.photo,
      diff: friend.scores.reduce((totalDiff, friendScore, idx) => totalDiff + Math.abs(friendScore - scores[idx]), 0)
    };
  });

  const closestMatch = totalDifferences.reduce((cloest, curr) => curr.diff < cloest.diff ? curr : cloest);
  console.log(closestMatch);
  res.json(closestMatch);

};

// POST /api/admin
const modifyQuestions = (req, res, next) => {
  const questions = req.body;
  db.ref('/questions').set(questions)
    .then(() => {
      res.json({result: 'changed'});
    }, err => {
      throw new Error("Can't save questions");
    });
};


module.exports = {
  list,
  getCompatibleFriends,
  modifyQuestions
}