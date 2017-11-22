Template.body.helpers({
  polls: function(){
    return Polls.find();
  }
});

Template.registerHelper('indexedArray', function(context, options){
  if(context){
    return context.map(function(item, index){
      item._index = index;
      return item;
    });
  }
});

Template.pollForm.events({
  'submit #pollForm':function(){
    let newPoll = {
      question: event.target.question.value,
      choices: [
        {text: event.target.choice1.value, votes: 0},
        {text: event.target.choice2.value, votes: 0},
        {text: event.target.choice3.value, votes: 0},
        {text: event.target.choice4.value, votes: 0}
      ]
    }

    event.target.question.value = '';
    event.target.choice1.value = '';
    event.target.choice2.value = '';
    event.target.choice3.value = '';
    event.target.choice4.value = '';

    Polls.insert(newPoll);

    return false;
  }
});

Template.poll.events({
  'click .vote':function(event){

    event.preventDefault();

    let pollId = $(event.currentTarget).parent('.poll').data('id');
    let voteId = $(event.currentTarget).data('id');

    let voteString = 'choices.'+ voteId + '.votes';
    let action = {};
    action[voteString] = 1;

    Polls.update({_id: pollId},{$inc: action});

    return false;
  }
});
