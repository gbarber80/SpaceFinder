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
		suite: "NYC Office Suites",
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
	},
	{
		address: "Nook at Space 530",
		address2:"530 7th Avenue",
		suite: "Mezzanine Level ",
		city: "New York",
		state: "NY",
		zip: "10018",
		price: 15,
		like: true,
		rating: 2,
		image: "https://placekitten.com/g/350/150"
	},
	{
		address: "Meeting Room at Impact Hub NYC",
		address2:"394 Broadway",
		suite: "5th Floor  ",
		city: "New York",
		state: "NY",
		zip: "10013",
		price: 30,
		like: true,
		rating: 3,
		image: "https://placekitten.com/g/350/150"
	},
	{
		address: "Think Tank at Grind Park",
		address2:"419 Park Ave S",
		suite: "2nd Floor",
		city: "New York",
		state: "NY",
		zip: "10016",
		price: 30,
		like: true,
		rating: 3.5,
		image: "https://placekitten.com/g/350/150"
	},
	{
		address: "Workstation at Quest Workspaces",
		address2:"1271 Avenue of the Americas",
		suite: "43rd Floor",
		city: "New York",
		state: "NY",
		zip: "10037",
		price: 20,
		like: true,
		rating: 2,
		image: "https://placekitten.com/g/350/150"
	},
	{
		address: "Private Office at Corporate Suites",
		address2:"1180 Avenue of the Americas",
		suite: "8th Floor",
		city: "New York",
		state: "NY",
		zip: "10037",
		price: 35,
		like: true,
		rating: 4,
		image: "https://placekitten.com/g/350/150"
	},
	{
		address: "Conference Room at Hudson Park Advisors",
		address2:"110 East 40th Street",
		suite: "Suite 903",
		city: "New York",
		state: "NY",
		zip: "10016",
		price: 35,
		like: true,
		rating: 3,
		image: "https://placekitten.com/g/350/150"
	},
	{
		address: "Conference Room at NYC Seminar & Conf Center",
		address2:"71 West 23rd Street",
		suite: "Suite 515",
		city: "New York",
		state: "NY",
		zip: "10010",
		price: 35,
		like: true,
		rating: 4,
		image: "https://placekitten.com/g/350/150"
	},
	{
		address: "Conference Room at Hudson River Collaborative",
		address2:"12 Vestry Street",
		suite: "7th Floor",
		city: "New York",
		state: "NY",
		zip: "10013",
		price: 35,
		like: true,
		rating: 5,
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

