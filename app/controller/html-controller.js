const questions$ = require('../data/questions'); //questions stream
let questions;
questions$.subscribe(qs => questions = qs);

//home page
const renderHome = (req, res, next) => {
  res.render('home', {
    title: 'Home'
  });
};

//survey page
const renderSurvey = (req, res, next) => {
  res.render('survey', {
    title: 'Survey',
    questions
  });
}

const renderAdmin = (req, res, next) => {
  // res.render('index', { title: 'Express' });
  res.render('admin', {
    title: 'Admin',
    questions
  });
};


module.exports = {
  renderHome,
  renderSurvey,
  renderAdmin
}