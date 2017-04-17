const db = require('../firebase');
const rx = require('rxjs');

const initialQuestions = [
  'Your mind is always buzzing with unexplored ideas and plans.',
  'Generally speaking, you rely more on your experience than your imagination.',
  'You find it easy to stay relaxed and focused even when there is some pressure.',
  'You rarely do something just out of sheer curiosity.',
  'People can rarely upset you.',
  'It is often difficult for you to relate to other people’s feelings.',
  'In a discussion, truth should be more important than people’s sensitivities.',
  'You rarely get carried away by fantasies and ideas.',
  'You think that everyone’s views should be respected regardless of whether they are supported by facts or not.',
  'You feel more energetic after spending time with a group of people.'
];

db.ref('/questions').once('value').then(snap => {
  if (!snap.exists()) db.ref('/questions').set(initialQuestions);
});

const questionObservable = rx.Observable.create(observer => {
  db.ref('questions').on('value', snap => {
    if (!snap.exists()) return db.ref('questions').set(initialQuestions); //save initial questions on Firebase db
    //else (if questions data exists)
    const questions = snap.val();
    observer.next(questions);
  })
});

module.exports = questionObservable;