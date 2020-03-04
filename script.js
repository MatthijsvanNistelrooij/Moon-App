var city = "Groningen";


$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=8bdb0a2f1bd8ebf5b8c89d434ae84aa6", 
function(data){
    console.log(data);

var icon        = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var weather     = data.weather[0].main;
var temp        = Math.floor(data.main.temp);
    
                $('.weather').append(weather);
                $('.icon').attr('src', icon);
                $('.temp').append(temp);
});


function example_2(moon){
	var html="<div class='moon'>"
	html+="<div>"+ 1 +" "+moon ['monthName'] + " "+moon.year +"</div>"
	html+=moon.phase[1].svg
	html+="<div>"+moon.phase[1].phaseName + " "+ Math.round(moon.phase[1].lighting)+"%</div>"
	html+="</div>"
	html+="<div class='moon'>"
	html+="<div>"+moon.daysMonth +" "+moon ['monthName'] + " "+moon.year +"</div>"
	html+=moon.phase[moon.daysMonth].svg
	html+="<div>"+moon.phase[moon.daysMonth].phaseName + " "+ Math.round(moon.phase[moon.daysMonth].lighting)+"%</div>"
	html+="</div>"
	for (i=1;i<=moon.daysMonth;i++){
		if (moon.phase[i].isPhaseLimit){
			html+="<div class='moon'>"
html+= "<div class='phaseLimit'>"+moon.phase[i].svgMini+" "+i+"</div><br clear=all>"
			html+=moon.phase[i].svg
			html+="<div>"+moon.phase[i].phaseName + " </div>"
			html+="</div>"
		}
	}
	document.getElementById("ex2").innerHTML=html
}