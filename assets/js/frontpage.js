var projects = [
	{
		site:'https://morning-sands-81249.herokuapp.com/',
		name: 'Edufy',
		image: 'assets/images/bodybg.jpg',
		description: 'Edufy is the  big first full-stack project I worked on. It uses MySql, Express, and Node, along with other packages.'
	},	{
		site:'https://github.com/michaelrogers/Tail-gator',
		name: 'Tail-Gator',
		image: 'assets/images/bodybg.jpg',
		description: 'Tail-Gator is the first big front end project. It uses Firebase for user login and database.'
	},	{
		site:'https://safe-eyrie-52221.herokuapp.com/',
		name: 'Rock! Paper! Scissors!',
		image: 'assets/images/bodybg.jpg',
		description: 'This is a "Rock, Papers, Scissors" game that uses firebase to create a 1v1 online game. Currently only hosts one room at a time.'
	},	{
		site:'https://github.com/yashaRO/Bamazon',
		name: 'Bamazon',
		image: 'assets/images/bodybg.jpg',
		description: "Bamazon is a node command line app that pretends to be a program used for keeping track of a store's inventory w/ MySql."
	},	{
		site:'https://fast-headland-94724.herokuapp.com/',
		name: 'Gif-Hub',
		image: 'assets/images/bodybg.jpg',
		description: 'A small project using the giphy api to do pretty much what it does.'
	},	{
		site:'https://github.com/yashaRO/Liri',
		name: 'Liri',
		image: 'assets/images/bodybg.jpg',
		description: 'A node app that can take certain inputs on the command line and respond accordingly.'
	},
]


$(document).ready(function() {
	$('#fullpage').fullpage({
		normalScrollElements: '#bioText, .topPage'
	});
	var i = 0
	$.each(projects, function(index, value) {
		console.log(i++)
		$('.topPage').append(
			`<a class='col s6 m4 l3' href='${value.site}'>
   	    <div class='card small'>
   	    	<div class='card-image'>
   	    		<img src='${value.image}'>
   	    		<span class='card-title'>${value.name}</span>
   	    	</div>
   	    	<div class='card-content'>
   	    		${value.description}
   	    	</div>
   	    </div>
    	</a>`
		)
		console.log(`<a class='col s6 m4 l3' href='${value.site}'>
   	    <div class='card small'>
   	    	<div class='card-image'>
   	    		<img src='${value.image}'>
   	    		<span class='card-title'>${value.name}</span>
   	    	</div>
   	    	<div class='card-content'>
   	    		${value.description}
   	    	</div>
   	    </div>
    	</a>`)
	})
	
});















