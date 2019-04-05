
var count = 0;
var team = 0;
var teamLinks = ["https://github.com/ksellers15/Team1", "https://github.com/ksellers15/Team2", "https://github.com/ksellers15/Team3",
                "https://github.com/ksellers15/Team4", "https://github.com/ksellers15/Team5"];

function getCurrentNumbers(){
  var form = FormApp.getActiveForm();
  var length = form.getResponses().length

  if(length >=17 && length < 20){
    count = length + 1 - 16
    team = 5;
  }else if(length >= 12 && length < 16){
    count = length + 1 - 12
    team = 4;
  }else if(length >= 8 && length < 12){
    count = length + 1 - 8;
    team = 3;
  }else if(length >=4 && length < 8){
    count = length + 1 - 4;
    team = 2;
  }else if(length < 4){
    count = length + 1;
    team = 1;
  }
}

function setConfirmationMessage() {
  var message = "You are on team " + team + ". Your number is " + count + ".\nFollow this link to your project: ";

  if(team == 1){
    message += teamLinks[0];
  }else if(team == 2){
    message += teamLinks[1];
  }else if(team == 3){
    message += teamLinks[2];
  }else if(team == 4){
    message += teamLinks[3];
  }else if( team == 5){
    message += teamLinks[4];
  }else{
    message = "Teams are filled! Check with Kason to see what team you are on.";
  }

  var form = FormApp.getActiveForm().setConfirmationMessage(message);
  Logger.log(form.getResponses().length);
  Logger.log("Confirmation Message sent " + form.getConfirmationMessage());
}

//There is a trigger associated with this function on the external dashboard
//This function is triggered when the form is submitted
function formSubmitted(){
  getCurrentNumbers();
  setConfirmationMessage();
}
