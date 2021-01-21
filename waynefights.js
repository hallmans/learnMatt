// Wayne fights program
// Day 5

/*var fightsLk = 1;


function skillLevel(fight){
	var strength = Math.floor(Math.random() * 11);      // returns a random integer from 0 to 10
	console.log("The strength of your opponent is " + strength);
	return strength;
}
function wayne(fight){
	var strength = 3 + Math.floor(Math.random() * 11);
	console.log("The strength of Wayne is " + strength);
	return strength;
}

var wayneSkill;
var challengerSkill;

while (fightsLk < 21){
	wayneSkill = wayne();
	challengerSkill = skillLevel();
	if (wayneSkill == challengerSkill){
		console.log("TIE!\n");
	}
	else if(wayneSkill < challengerSkill){
		console.log("Skid is the winner!\n");		
	}
	else{
		console.log("Wayne is the winner!\n");
	}
	fightsLk = fightsLk + 1;
}
*/

//wayne fights with objects
//Day 7

var pillboy = {
    name: "pillboy",  
    skillLevel: 8,
    quickness: 5,
    health: 8
};

var mcmurray = {
    name: "McMurray",
    skillLevel: 7,
    quickness: 5,
    health: 8
};

var skid = {
    name: "stewart",
    skillLevel: 5,
    quickness: 8,
    health: 4
}

var pasterGlen = {
    name: "glen",
    skillLevel: 4,
    quickness: 8,
    health: 4,
    friendsWith: daryl
};

var coach= {
    name: "coach",
    skillLevel: 6,
    quickness: 4,
    health: 5
};

var daryl = {
    name: "Darry",
    skillLevel: 10 ,
    quickness: 8,
    health: 7,
    friendsWith: pasterGlen
};

var toughGuys = [coach, daryl, pasterGlen, skid, mcmurray, pillboy];

function pickFighter() {
    var fighterIndex = Math.floor(Math.random() * 6);
    return toughGuys[fighterIndex];
}



var match = 1;
var f1;
var f2;

while (match < 21) {
    f1 = pickFighter();
    f2 = pickFighter();
    if (f1 == f2) {
        console.log("Can't fight yourself");
    } else if (f1.friendsWith == f2.friendsWith) {
        console.log("Have a beer instead");
    } else {
        console.log("Match between", f1.name, "and", f2.name);
        var f1points = f1.skillLevel + f1.quickness + f1.health;
        var f2points = f2.skillLevel + f2.quickness + f2.health;

        if (f1points > f2points) {
            console.log("how are ya now? just kidding i dont give a fuck")
        } else {
            console.log(" you loose.. spare parts aren't you bud");
        }
    }
            

    match = match + 1;
}
        
    





