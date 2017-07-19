
colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

function getQuote()
{	
	var q="Leave one wolf, and the sheep are never safe";
	var a="Arya";
	var url= "https://got-quotes.herokuapp.com/quotes";
	$.getJSON(url, function(data){
		q=data.quote;
		a=data.character;			
	});

	$("#quote").animate({
		opacity: 0
	}, 600,
	function(){
		$(this).animate({
			opacity: 1
		}, 600);
		$("#quote").html('"'+q+'"');
	});
	$("#author").animate({
		opacity: 0
	}, 600,
	function(){
		$(this).animate({
			opacity: 1
		}, 600);
		$("#author").html("-"+a);
	});

	color = Math.floor(Math.random() * colors.length);

	$("#title").animate({
		color: colors[color]
	},1000);
	$("#bor").animate({
		borderColor: colors[color]
	},1000);
	$(".but").animate({
		borderColor: colors[color]
	},1000);
}

$(document).ready(function(){
	getQuote();
	$("#but1").on('click', getQuote);
	$("#but2").on('click', function(){
		window.open("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+'"'+q+'" -'+a);
	});
});
