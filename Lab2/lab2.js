$(window).on("load", function () {

				var x = $("#widget-container");

				    if (navigator.geolocation) {
				        navigator.geolocation.getCurrentPosition(showPosition);
				    } else {
				        x.innerHTML = "Geolocation is not supported by this browser.";
				    }
				
				function showPosition(position) {

					var myUrl = "http://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid=c76c52caf494c9f9004356a30d8a38e4";

					var xmlHttp = new XMLHttpRequest();
				    xmlHttp.onreadystatechange = function() { 
				        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
				            var response = JSON.parse(xmlHttp.responseText);
				            console.log(response);
				            $("#city").text(response.name);
				            $("#weather-icon").attr("src","http://openweathermap.org/img/w/"+ response.weather[0].icon +".png");
				            $("#weather").text(response.weather[0].description);
				            $("#wind").text("Wind Speed: " + response.wind.speed + " mph");
				            $("#temp").text("Current Temp: " + Math.round(response.main.temp - 273.15) + " C");
				            $("#humid").text("Humidity: " + response.main.humidity+ "%");
				        }
				    }
			    	xmlHttp.open("GET", myUrl, true); // true for asynchronous 
			    	xmlHttp.send();
				}

			});