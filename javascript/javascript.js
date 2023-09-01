const quizButton = document.getElementById("quiz-button");
const heroInfoElement = document.getElementById("hero-info");
const heroQuizElement = document.getElementById("hero-quiz");

quizButton.addEventListener('click', startQuiz);

function startQuiz() {
  console.log('Started');
  quizButton.classList.add('hide');
  heroInfoElement.classList.add('hide');
  heroQuizElement.classList.remove('hide');
}

function check() {
  var a=0;
  var q1=document.quiz.question1.value;
  var q2=document.quiz.question2.value;
  var q3=document.quiz.question3.value;
  var q4=document.quiz.question4.value;
  var q5=document.quiz.question5.value;
  var q6=document.quiz.question6.value;
  var result=document.getElementById('result');
  var quiz=document.getElementById("quiz");
  if (q1=="Katma Tui" || q1=="The Dark Knight" || q1=="Krypton" || q1==="Captain Marvel" || q1==="Vibranium" || q1==="X-Men" || q1==="Spider" || q1==="Gamma" || q1==="Two" || q1==="One" || q1==="Third" || q1==="Goten/Trunks") {a++}
  
  if (q2=="Master Builder" || q2=="Batmobile" || q2=="Smallville" || q2==="Greek" || q2==="Shuri" || q2==="Kenya" || q2==="Daily Bugel" || q2==="Anger" || q2==="Bardock" || q2==="Genos" || q2==="Sho" || q2==="Fusion Dance") {a++}
  
  if (q3=="Detroit" || q3=="Batcave" || q3=="Daily Planet" || q3==="Fawcett Comics" || q3==="Bast" || q3==="Wonder Woman" || q3==="Gwen Stacy" || q3==="Grey" || q3==="Planet Vegeta" || q3==="Z-City" || q3==="Devil's Footprint" || q3==="Piccolo") {a++}
  
  if (q4=="Architect" || q4=="Alfred Pennyworth" || q4=="The Man of Steel" || q4==="The Rock of Eternity" || q4==="Storm" || q4==="Claustrophobia" || q4==="Uncle Ben" || q4==="Betty Ross" || q4==="Namek" || q4==="C-Class" || q4==="Company 8" || q4==="Majin Buu") {a++}
  
  if (q5=="Third" || q5=="Dick Grayson" || q5=="Magic" || q5==="Fawcett City" || q5==="Fantastic Four" || q5==="David Munroe" || q5==="The Chameleon" || q5==="Maestro" || q5==="Master Roshi" || q5==="100" || q5==="Evil Grin" || q5==="Goku/Vegeta") {a++}
  
  if (q6=="Darkstars" || q6=="Bane" || q6=="Phonebooth" || q6==="Black Adam" || q6==="Chadwick Boseman" || q6==="Black Panther" || q6==="Thunderbolts" || q6==="Joe Fixit" || q6==="Spirit Bomb" || q6==="Hair" || q6==="Hero" || q6==="Spirit Bomb") {a++}
  
  quiz.style.display="none";
  //document.write(a);
  //result.textContent=`${a}`;
  if (a<=2) {
    result.innerHTML=`You answered ${a} of 6 questions correctly. I guess you're not that much of a fan after all. <img src="../images/emojisad.gif"></img>`
  } else if (a<=3) {
    result.innerHTML=`You answered ${a} of 6 questions correctly. I guess you are a fan. <img src="../images/emojiunamused.gif"></img>`
  } else if (a<=5) {
    result.innerHTML=`You answered ${a} of 6 questions correctly. This must be one of your favorite heroes. <img src="../images/emojihappy.gif"></img>`
  } else {
    result.innerHTML=`You answered ${a} of 6 questions correctly. This must be your favorite superhero. You truly are a superfan! <img src="../images/emojilove.gif"></img>`
  }  
}