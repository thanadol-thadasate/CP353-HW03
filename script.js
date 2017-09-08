// GET api
var getBeersAPI = function getBeersAPI() {
    return fetch('https://api.punkapi.com/v2/beers').then(function (response) {
        return response.json();
    }).catch(function (error) {
        return console.error('fail');
    }).then(function (response) {
        var result = "";
        for (var i = 0; i < response.length; i++) {
            result += "<b>Name : </b>" 
			+ response[i].name + "<br> <b>Tagline : </b>" 
			+ response[i].tagline + "<br> <b>PH : </b>" 
			+ response[i].ph + "<br> <b>Food : </b>" 
			+ response[i].food_pairing + "<br> <b>First Brewed : </b>" 
			+ response[i].first_brewed + "<br> <b>Description : </b>" 
			+ response[i].description + "<br>" + "<image src =" 
			+ response[i].image_url + "/><hr>";
        }
        document.getElementById('result').innerHTML = result;
    });
};

// Show Beer_name & Food
function getBeerAPIByName(name, food) {
	var apiURL="";
	if(name == "" & food !="")
		{ apiURL = 'https://api.punkapi.com/v2/beers/?food=' + food }
	else
		{ apiURL = 'https://api.punkapi.com/v2/beers/?beer_name=' + name + '&?food=' + food }
	
	return fetch(apiURL).then(function (response) {
        return response.json();
    }).catch(function (error) {
        return console.error('fail');
    }).then(function (response) {
        var result = "";
        for (var i = 0; i < response.length; i++) {
            result += "<b>Name : </b>" 
			+ response[i].name + "<br> <b>Tagline : </b>" 
			+ response[i].tagline + "<br> <b>PH : </b>" 
			+ response[i].ph + "<br> <b>Food : </b>" 
			+ response[i].food_pairing + "<br> <b>First Brewed : </b>" 
			+ response[i].first_brewed + "<br> <b>Description : </b>" 
			+ response[i].description + "<br>" + "<image src =" 
			+ response[i].image_url + "/><hr>";
        }
		if((name == "" & food =="") || response == "")
			{document.getElementById('result').innerHTML = "Not result";}
		else
			document.getElementById('result').innerHTML = result;
    });
};

















