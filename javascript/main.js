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
		image: "https://liquidspace.com/Picture/Index/3e7ab5c1-bb4d-498f-9ddf-425b6f2468e8?emptyImageUrl=~/Content/Images/workspace-photo-not-available.png&etag=pzsx9VRF43TXnEjPBGCRNw==&maxWidth=450&maxHeight=300&crop=true&pos=0001"
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
		image: "https://liquidspace.com/Picture/Index/cc6e03ee-7384-4d97-8c51-e07791523a55?emptyImageUrl=~/Content/Images/workspace-photo-not-available.png&etag=jMhcsmbgTu+SctFm0QtT8w==&maxWidth=450&maxHeight=300&crop=true&pos=0002"
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
		image: "https://liquidspace.com/Picture/Index/84c9dca3-072d-4570-ba45-205f8675b006?emptyImageUrl=~/Content/Images/workspace-photo-not-available.png&etag=7MrVW/Y+PbRg7Iaryehyzg==&maxWidth=450&maxHeight=300&crop=true&pos=0003"
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
		image: "https://liquidspace.com/Picture/Index/f7ee2a9e-7293-4e11-b02e-ffeba680cd5d?emptyImageUrl=~/Content/Images/workspace-photo-not-available.png&etag=lMqDuruDfSqNr/YgTKX+pQ==&maxWidth=450&maxHeight=300&crop=true&pos=0004"
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
		image: "https://liquidspace.com/Picture/Index/f4be7bcf-f6f3-483b-8b3c-5e9fdc261180?emptyImageUrl=~/Content/Images/workspace-photo-not-available.png&etag=BeLCOPxjMHA8L4aNSxdEMw==&maxWidth=450&maxHeight=300&crop=true&pos=0002"
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
		image: "https://liquidspace.com/Picture/Index/73950cee-27c1-40eb-b9d6-fedf722ed10a?emptyImageUrl=~/Content/Images/workspace-photo-not-available.png&etag=3UWoLxCkghKaivMiviSyAg==&maxWidth=450&maxHeight=300&crop=true&pos=0005"
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
		image: "https://liquidspace.com/Picture/Index/c347161d-66fc-4d58-8d21-f77e86243464?emptyImageUrl=~/Content/Images/workspace-photo-not-available.png&etag=VYZWXjKG9nGF1Rc8Zrn+nA==&maxWidth=450&maxHeight=300&crop=true&pos=0007"
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
		image: "https://liquidspace.com/Picture/Index/e61ee410-ff2d-4ff5-bc27-cc6be7c54c23?emptyImageUrl=~/Content/Images/workspace-photo-not-available.png&etag=OP4gwmwrzvjEjA+A0zPvqg==&maxWidth=450&maxHeight=300&crop=true&pos=0022"
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
		image: "https://liquidspace.com/picture/index/51dc8b4a-27fb-40f1-b7e0-e379234382c1?emptyImageUrl=~/Content/Images/workspace-photo-not-available.png&etag=Q0wT2Jz5XS80d1eoSEZQkw==&maxWidth=450&maxHeight=300&crop=true&pos=0012"
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
		image: "https://liquidspace.com/Picture/Index/e3af1b94-643e-4e15-aed9-6b84aa1fdc9b?emptyImageUrl=~/Content/Images/workspace-photo-not-available.png&etag=sTlpCmt6OptH5rqYy44eYQ==&maxWidth=450&maxHeight=300&crop=true&pos=0009"
	},
	{
		address: "Conference Room at Hudson River Collaborative",
		address2:"12 Vestry Street",
		suite: "7th Floor",
		city: "New York",
		state: "NY",
		zip: "10013",
		price: 55,
		like: true,
		rating: 5,
		image: "https://liquidspace.com/Picture/Index/cfaf7069-3339-4f89-83f4-34b418126d2f?emptyImageUrl=~/Content/Images/workspace-photo-not-available.png&etag=a1nTaRqEV7Mj3YFvpsvMbg==&maxWidth=450&maxHeight=300&crop=true&pos=0004"
	},
	{
		address: "Office for One",
		address2:"733 3rd Ave",
		suite: "5th Floor",
		city: "New York",
		state: "NY",
		zip: "10017",
		price: 25,
		like: true,
		rating: 5,
		image: "https://liquidspace.com/Picture/Index/9535c764-821a-4ce6-82bd-f26819186dce?emptyImageUrl=~/Content/Images/workspace-photo-not-available.png&etag=/h8Ij2r9xvWADoj6ZXCU/w==&maxWidth=450&maxHeight=300&crop=true&pos=0011"
	}	,
	{
		address: "Conference Room at Look Media ",
		address2:"330 West 38th Street",
		suite: "Suite 1500",
		city: "New York",
		state: "NY",
		zip: "10018",
		price: 50,
		like: true,
		rating: 5,
		image: "https://liquidspace.com/Picture/Index/0a17c095-0064-4dc2-90b7-fcfe0f411ba3?emptyImageUrl=~/Content/Images/workspace-photo-not-available.png&etag=SgbbhUgMNvUlcEYD/NVskQ==&maxWidth=450&maxHeight=300&crop=true&pos=0019"
	},
	{
		address: "Conference Room A",
		address2:"225 West 34th Street",
		suite: "9th Floor",
		city: "New York",
		state: "NY",
		zip: "10122",
		price: 50,
		like: true,
		rating: 4,
		image: "https://liquidspace.com/Picture/Index/ccd79804-5634-4e91-9628-ca59f1925502?emptyImageUrl=~/Content/Images/workspace-photo-not-available.png&etag=NFO1jvLaK0VFcx7TkV4H2A==&maxWidth=450&maxHeight=300&crop=true&pos=0021"
	},
	{
		address: "Communal Coworking Workspace ",
		address2:"447 Broadway",
		suite: "2nd Floor",
		city: "New York",
		state: "NY",
		zip: "10013",
		price: 20,
		like: true,
		rating: 5,
		image: "https://liquidspace.com/Picture/Index/e5880c05-3d19-44d0-b98f-45c3f1c84ad3?emptyImageUrl=~/Content/Images/workspace-photo-not-available.png&etag=FFxyfiboekXEPRdc+wY6Hw==&maxWidth=450&maxHeight=300&crop=true&pos=0011"
	},
	{
		address: "Conference Room A",
		address2:"225 West 34th Street",
		suite: "9th Floor",
		city: "New York",
		state: "NY",
		zip: "10122",
		price: 50,
		like: true,
		rating: 4.5,
		image: "https://liquidspace.com/picture/index/e28b2fd6-fdd5-42eb-aa20-09cf7fbf101d?emptyImageUrl=~/Content/Images/workspace-photo-not-available.png&etag=XZ0QLrui+rSa86LEd5ld0w==&maxWidth=450&maxHeight=300&crop=true&pos=0016"
	},
	{
		address: "Corner Conference Room",
		address2:"One Penn Plaza",
		suite: "Suite 4205",
		city: "New York",
		state: "NY",
		zip: "10001",
		price: 55,
		like: true,
		rating: 5,
		image: "https://liquidspace.com/picture/index/fe73354c-d314-4072-abad-bfab832a7894?emptyImageUrl=~/Content/Images/workspace-photo-not-available.png&etag=vfxouXbMNJsYIvu7xhQUCQ==&maxWidth=450&maxHeight=300&crop=true&pos=0010"
	},
	{
		address: "Coworking Space",
		address2:"1204 Broadway",
		suite: "4th Floor",
		city: "New York",
		state: "NY",
		zip: "10001",
		price: 15,
		like: true,
		rating: 4.5,
		image: "https://liquidspace.com/Picture/Index/b3dd1178-6413-4347-ae2d-aba4c5b4bfda?emptyImageUrl=~/Content/Images/workspace-photo-not-available.png&etag=N2tCNvx9GR4Vg4/mSYSrbA==&maxWidth=450&maxHeight=300&crop=true&pos=0015"
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
		image: "https://liquidspace.com/Picture/Index/cfaf7069-3339-4f89-83f4-34b418126d2f?emptyImageUrl=~/Content/Images/workspace-photo-not-available.png&etag=a1nTaRqEV7Mj3YFvpsvMbg==&maxWidth=450&maxHeight=300&crop=true&pos=0004"
	},
	{
		address: "Conference Room",
		address2:"21 West 46th Street",
		suite: "16 Floor",
		city: "New York",
		state: "NY",
		zip: "10036",
		price: 50,
		like: true,
		rating: 4,
		image: "https://liquidspace.com/picture/index/d8aa06bb-23f4-4bff-9a81-8fb550dbda5a?emptyImageUrl=~/Content/Images/workspace-photo-not-available.png&etag=l78ElPX42iAj5SaPFi97tQ==&maxWidth=450&maxHeight=300&crop=true&pos=0018"
	},
	{
		address: "Day Pass",
		address2:"1412 Broadway,",
		suite: "22nd Floor",
		city: "New York",
		state: "NY",
		zip: "10018",
		price: 35,
		like: true,
		rating: 5,
		image: "https://liquidspace.com/picture/index/56ba79e4-b755-48ba-a7e0-e877b6243b29?emptyImageUrl=~/Content/Images/workspace-photo-not-available.png&etag=bRAHQ8mRSIJTXabukGwI+w==&maxWidth=450&maxHeight=300&crop=true&pos=0020"
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

