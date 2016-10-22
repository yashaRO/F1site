var gScore = 100;
var rScore = 0;
var grades = [0,0,0,0,0]
var round = ['Round 1','Round 2', 'Round 3', 'Round 4', 'Round 5']
var i = 0;
var standing = 0;
var cards = function() {
	return [{cardv:1,link:'cards/ace_of_clubs.png'},
	{cardv:1,link:'cards/ace_of_diamonds.png'},
	{cardv:1,link:'cards/ace_of_hearts.png'},
	{cardv:1,link:'cards/ace_of_spades.png'},
	{cardv:2,link:'cards/2_of_clubs.png'},
	{cardv:2,link:'cards/2_of_diamonds.png'},
	{cardv:2,link:'cards/2_of_hearts.png'},
	{cardv:2,link:'cards/2_of_spades.png'},
	{cardv:3,link:'cards/3_of_clubs.png'},
	{cardv:3,link:'cards/3_of_diamonds.png'},
	{cardv:3,link:'cards/3_of_hearts.png'},
	{cardv:3,link:'cards/3_of_spades.png'},
	{cardv:4,link:'cards/4_of_clubs.png'},
	{cardv:4,link:'cards/4_of_diamonds.png'},
	{cardv:4,link:'cards/4_of_hearts.png'},
	{cardv:4,link:'cards/4_of_spades.png'},
	{cardv:5,link:'cards/5_of_clubs.png'},
	{cardv:5,link:'cards/5_of_diamonds.png'},
	{cardv:5,link:'cards/5_of_hearts.png'},
	{cardv:5,link:'cards/5_of_spades.png'},
	{cardv:6,link:'cards/6_of_clubs.png'},
	{cardv:6,link:'cards/6_of_diamonds.png'},
	{cardv:6,link:'cards/6_of_hearts.png'},
	{cardv:6,link:'cards/6_of_spades.png'},
	{cardv:7,link:'cards/7_of_clubs.png'},
	{cardv:7,link:'cards/7_of_diamonds.png'},
	{cardv:7,link:'cards/7_of_hearts.png'},
	{cardv:7,link:'cards/7_of_spades.png'},
	{cardv:8,link:'cards/8_of_clubs.png'},
	{cardv:8,link:'cards/8_of_diamonds.png'},
	{cardv:8,link:'cards/8_of_hearts.png'},
	{cardv:8,link:'cards/8_of_spades.png'},
	{cardv:9,link:'cards/9_of_clubs.png'},
	{cardv:9,link:'cards/9_of_diamonds.png'},
	{cardv:9,link:'cards/9_of_hearts.png'},
	{cardv:9,link:'cards/9_of_spades.png'},
	{cardv:10,link:'cards/10_of_clubs.png'},
	{cardv:10,link:'cards/10_of_diamonds.png'},
	{cardv:10,link:'cards/10_of_hearts.png'},
	{cardv:10,link:'cards/10_of_spades.png'},
	{cardv:10,link:'cards/jack_of_clubs.png'},
	{cardv:10,link:'cards/jack_of_diamonds.png'},
	{cardv:10,link:'cards/jack_of_hearts.png'},
	{cardv:10,link:'cards/jack_of_spades.png'},
	{cardv:10,link:'cards/queen_of_clubs.png'},
	{cardv:10,link:'cards/queen_of_diamonds.png'},
	{cardv:10,link:'cards/queen_of_hearts.png'},
	{cardv:10,link:'cards/queen_of_spades.png'},
	{cardv:10,link:'cards/king_of_clubs.png'},
	{cardv:10,link:'cards/king_of_diamonds.png'},
	{cardv:10,link:'cards/king_of_hearts.png'},
	{cardv:10,link:'cards/king_of_spades.png'}]
	}
var cardcopy = cards();
function hit() {
	standing = 1;
	document.getElementById('round').innerHTML = round[i]
	var card = Math.floor(Math.random()*cardcopy.length);
	rScore += cardcopy[card].cardv;
	$('.card').append('<img class="tryout" src=' + '"' + cardcopy[card].link + '"' + '/>')
	cardcopy.splice(card,1);
	document.getElementById('rScore').innerHTML = rScore;
	if (rScore >= 21) {
		document.getElementById('demo2').innerHTML = '&nbsp';
		if (rScore > 21) {
			rScore = 0;
			document.getElementById('demo1').innerHTML = 'BUST!';
			stand();
			return;
		}
		document.getElementById('demo1').innerHTML = 'BLACKJACK';
		stand();
		return;
	}
}
function stand() {
	if (standing == 0) {return}
	standing = 0;
	document.getElementById('hit').innerHTML = 'Continue';
	document.getElementById('hit').onclick = cont;
	document.getElementById('gScore').innerHTML = gScore -= rScore;
	document.getElementById('rScore').innerHTML = rScore = 0;
	cardcopy = cards();
	if (i == 4) {
		document.getElementById('hit').innerHTML = "Play Again?";
		document.getElementById('hit').onclick = reset;
		grade(gScore);
	}
	else {i++;}
}
function cont() {
	document.getElementById('demo1').innerHTML = document.getElementById('demo2').innerHTML= '&nbsp';
	document.getElementById('hit').innerHTML = 'Hit';
	document.getElementById('hit').onclick = hit;
	$('.card').empty();
}
function reset() {
	gScore = 100;
	rScore = 0;
	i = 0;
	document.getElementById('demo1').innerHTML = 'You have five rounds to';
	document.getElementById('demo2').innerHTML = 'get to the game score!';
	document.getElementById('hit').innerHTML = 'Hit';
	document.getElementById('hit').onclick = hit;
	document.getElementById('gScore').innerHTML = 100;
	document.getElementById('rScore').innerHTML = 0;
	$('.card').empty();
}
function giveGrade() {
	document.getElementById('demo1').innerHTML = 'You have';
	document.getElementById('demo2').innerHTML = "A: " + grades[0] + " B: " +  grades[1] + " C: " + grades[2] + " D: " + grades[3] + " F: " + grades[4];
}
function grade(number) {
	if (number > 39) {
		grades[4]++
		alert("You got an F! Trash :/")
	}
	else if (number > 29) {
		grades[3]++
		alert("You got an D! Try Harder")
	}
	else if (number > 19) {
		grades[2]++
		alert("You got an C! Close!")
	}
	else if (number > 9) {
		grades[1]++
		alert("You got an B! Almost perfect!")
	}
	else {
		grades[0]++
		alert("You got an A! YAAAAAAAS!")
	}
}