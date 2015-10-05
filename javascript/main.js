/* CURRENTLY IN: javascript/main.js */
(function(){ // protect the lemmings

})();


var listings =  [
	{
		address: "Single Office",
		address2:"276 5th Avenue",
		suite: "Suite 704",
		city: "New York",
		state: "NY",
		zip: "10001",
		price: 25,
		like: true,
		rating: 4,
		image: "https://placekitten.com/g/350/150"
	},
	{
		address: "Midtown Office",
		address2:"708 3rd Ave",
		suite: "NYC Office Suites ",
		city: "New York",
		state: "NY",
		zip: "10017",
		price: 30,
		like: true,
		rating: 4.5,
		image: "https://placekitten.com/g/350/150"
	},
	{
		address: "Single Office",
		address2:"22 Cortlandt Street",
		suite: "16th Floor",
		city: "New York",
		state: "NY",
		zip: "10007",
		price: 32,
		like: false,
		rating: 2,
		image: "https://placekitten.com/g/350/150"
	}
];



var result = $("#template").html();
var compiled = _.template(result);
// var output = compiled(listings);

for( var i = 0; i < listings.length; i++ ) {
	console.log( listings[ i ] );
	var output = compiled(listings[ i ]);
	$('.target').append( output );
}


// $(".target").append(output);

