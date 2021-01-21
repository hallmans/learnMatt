// Write an area function and call if for 5 different rooms
function hardwoodFloors (length, width,){
    var SQ = (length * width);
        console.log("Your new hardwoods are going to look fantastic", length, width)
        return SQ;

}

/*var kitchenFloor = hardwoodFloors(40, 35);
var theatreFloor = hardwoodFloors(20, 25);
var dadsFloor = hardwoodFloors(20, 25);
var sisFloor = hardwoodFloors(28, 20);
var macAttacksFloor = hardwoodFloors( 15, 20);*/


var num = 10;

while(num < 60) {
    var area = hardwoodFloors(num, num);

    
 
    console.log("Get it right the first time why don't ya", num, area) ;
    num =  num + 5;
    
}