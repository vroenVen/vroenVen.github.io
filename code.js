var points=40;
var power=1;
var coins=0;
var dmgprce=10;
var timer=0;
var seconds=0;
var embarked = false;
var embCount = 10;
//var whitehill = {"White Hill

console.log(document.cookie.get);
function newlocation(a,b,c,d,e){
	return {
		name: a,
		low: b,
		high: c,
		qLenth: d,
		qReward: e,
		qCount: d,
		embarked: false,
	}
}

var whitehill =  newlocation("White Hills",20,100,10,20)
var mountan = newlocation("Mountan",10,20,20,30)
var curentLocation = whitehill;
var list = {whitehill, mountan}
function cLocation(){
	if (curentLocation.name == "whiteHills"){ whitehill = curentLocation;}
	if (curentLocation.name == "mountan"){ mountan = curentLocation;}
	var name=document.getElementById("locationBox").value;
	if (name == "whiteHills"){curentLocation = whitehill;}
	if (name == "mountan"){curentLocation = mountan;}
	//document.getElementById("Loca").innerHTML=curentLocation.Rname();
	console.log(curentLocation.name);
	textupdate();
}

function test(){
	console.log(document.getElementById("locationBox").value);
}
function oncl(){
	points-=power;
	textupdate();
}
function textupdate(){
	if (points <= 0){
		points = Math.round(Math.floor(Math.random() * 100) + 20);
		if (curentLocation.embarked){curentLocation.qCount+=1;}
		coins+=1;
	}
	//seconds = test.getSeconds()+test.getMinutes;
	if ((curentLocation.qCount >= curentLocation.qLenth) && (curentLocation.embarked)){
		coins+=curentLocation.qReward;
		
		curentLocation.embarked = false;
		document.getElementById("questButton").innerHTML="embark";
	}

	document.getElementById("questTime").innerHTML=curentLocation.qLenth-curentLocation.qCount;
	document.getElementById("p").innerHTML=points+" points";
	document.getElementById("damage").innerHTML=dmgprce+" coins";
	document.getElementById("coin").innerHTML=coins+" coins";
	
	document.getElementById("Loca").innerHTML = curentLocation.name;
	if (curentLocation.embarked == true){
		document.getElementById("questButton").innerHTML="embarked";
	} else {
		document.getElementById("questButton").innerHTML="embark";
	}
}
function damageUpgrade(){
	if (coins >= dmgprce){
		power+=1;
		coins = coins-dmgprce;
		dmgprce = dmgprce*2;
	}
textupdate();
}
function embark(){
	if (curentLocation.embarked == false){
		embCount = 0;
		curentLocation.qCount = 0;
		curentLocation.embarked = true;
		textupdate();
	}
}
var doubleTouchStartTimestamp = 0;
document.addEventListener("touchstart", function(event){
    var now = +(new Date());
    if (doubleTouchStartTimestamp + 500 > now){
        event.preventDefault();
    };
    doubleTouchStartTimestamp = now;
});
textupdate();
