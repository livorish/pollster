import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  if(Polls.find().count() === 0){
    let starterPolls = [
      {
        question:'What is your favorite JS framework?',
        choices:[
          {text:'Meteor', votes:0},
          {text:'Angular', votes:0},
          {text:'React', votes:0},
          {text:'Vue', votes:0}
        ]
      },
      {
        question:'What is your favorite language',
        choices:[
          {text:'JavaScript', votes:0},
          {text:'PHP', votes:0},
          {text:'Ruby', votes:0},
          {text:'Swift', votes:0},
          {text:'Other', votes:0}
        ]
      }
    ];

    // Loop and insert
    _.each(starterPolls, function(poll){
      Polls.insert(poll);
    });
  }
});
