console.clear();
var time = 1500; //1.5 second before loading script


setTimeout(function() {
  

    console.clear();
var currentLocation = window.location;
let twojeid = currentLocation.pathname;

var id = twojeid.replace("/challenge/", "");
var licznikPytan = 0;


var quizId = id;
var kahootjson = '';
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        kahootjson = xhr.responseText

        var kahootObject = JSON.parse(kahootjson);
    console.log("%c 🔥 Title: " + kahootObject.challenge.kahoot.title + " 🔥", 'color:#8ACAE7;font-size:20px;')
	console.log("%c👨‍🏫 Teacher: " + kahootObject.challenge.kahoot.creator_username + " 👨‍🏫", 'color: #FF0000;font-size:15px;');
	console.log("%c💁 Description: " + kahootObject.challenge.kahoot.description + " 💁", 'color: #CECC00;font-size:15px;');
	console.log("%c🎮 Amount of players: " + kahootObject.challenge.joinedCount + " 🎮", 'color: #FF0000;font-size:15px;');
	console.log("%c📝 QuizId: " + kahootObject.challenge.quizId + " Pin: " + kahootObject.challenge.pin + " 📝", 'color: #CECC00;font-size:15px;');
	
		console.log("%c⏰ Does this quiz has question timer? - " + kahootObject.challenge.game_options.question_timer + " ⏰", 'color: #FF0000;font-size:15px;');



    kahootObject.challenge.kahoot.questions.forEach(function(question) {

        let log_data='';
        log_data = question.question;
        let ans ='';
        question.choices.forEach(function(answer) {
            if(answer.correct){
        ans += answer.answer;

        }
        ans == " | ";

        });
        licznikPytan ++;
        console.log('%c' + licznikPytan + '. Pytanie: ' + log_data + '\n' +'%c    Odpowiedź: ' + ans,'font-size:15px' ,'color: #CA29FA;font-size:14px;' );

});

        console.log("%c Quiz Link:" + "%c https://create.kahoot.it/details/"  +kahootObject.challenge.quizId, 'color:#D2F943;font-size:20px;', 'color:white');
        console.log("%c ©️Kuczis", 'color:#F000F0;font-size:20px;')
    }
}
xhr.open('GET', 'https://kahoot.it/rest/challenges/' + quizId + '/answers', true);
xhr.send(null);
console.log("%c🤠 Klahoot made by Kuczis 🤠", 'color: #5762D5;font-size:30px;');
console.log("%c 🤘 Enjoy your answers 🤘", 'color: #5762D5;font-size:25px;');

//If you're reading this, please do not copy this script, or if you want to, please give us credit :D
//Backend: Kuczi$




}, time);
