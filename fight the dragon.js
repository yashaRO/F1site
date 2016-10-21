var dragon = 100, human = 50;
var charge = 0;
var Heal = 2
var person = null;
var gameover = 0
var scoreH = 0
var scoreD = 0
var heal = function() {
	if (gameover || human >= 50) {return;}
	if (!Heal) {document.getElementById('demo1').innerHTML = "You have no more heals"; return;}
    this.charge = 1;
    var k = 10;
    var bonus = Math.round((Math.random() - .3))
    if (bonus) {k = 15}
    var health = Math.round(Math.random()*5 + k);
    this.human += health;
	Heal -= 1;
	document.getElementById('demo1').innerHTML = "You have healed " + health + " points. Your health is now " + human;
	document.getElementById('demo2').innerHTML = person + ": " + human + " Yasha: " + dragon;
};
var fight = function() {
	if (gameover) {return;}
	if (!person) {person = prompt("What is your name")}
	if (person.toLowerCase() == 'corbin') {document.getElementById('demo1').innerHTML = "You don't fight. You lost. Fuck out of here Seymour."}
    var hit = [Math.round(Math.random() + .15),Math.round(Math.random() + .15)];
    if (hit[0]) {
        if (Math.round(Math.random() - .9)) {
            this.dragon -= 40;
            }
        else {this.dragon -= 20}
	}
	if (charge) {
		if (Math.round(Math.random() - .11)) {
			this.human -= 35;
			this.charge = 0;
		}
	}
    else if (hit[1]) {
        if (Math.round(Math.random() - .95)) {
            this.human -= 35;
		}
        else {this.human -= 15}
	}
	if (dragon  < 1 & human < 1) {human = 0; dragon = 0; document.getElementById('demo1').innerHTML = "Wait,"; document.getElementById('demo2').innerHTML = "What?"; return;}
	else if (dragon < 1) {
		gameover = 1; dragon = 0; scoreH += 1;
		document.getElementById('score1').innerHTML = scoreH;
		document.getElementById('demo1').innerHTML = "Congratulations";
		document.getElementById('dragon').src = "dragon_kill.gif"
		}
	else if (human < 1) {
		gameover = 1; human = 0; scoreD += 1;
		document.getElementById('score2').innerHTML = scoreD;
		document.getElementById('demo1').innerHTML = 'The hero has fallen! Try again?'; 
		document.getElementById('dragon').src = "hero_die.gif"
		};
	document.getElementById('demo2').innerHTML = person + ": " + human + " Yasha: " + dragon;
};
var reset = function() {human = 50; dragon = 100; Heal = 2; person = null; gameover = 0;
	document.getElementById('dragon').src = "dragon_sleep.jpg"}
var resetScore = function() {
	scoreD = 0; scoreH = 0;
	document.getElementById('score1').innerHTML = scoreH;
	document.getElementById('score2').innerHTML = scoreD;
}