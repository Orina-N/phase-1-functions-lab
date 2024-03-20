// Code your solution in this file! 
const locationHq = 42;
function distanceFromHqInBlocks(distanceInBlock) {
    if( distanceInBlock > 42){
        return distanceInBlock - locationHq
    }else if(distanceInBlock < 42){
        return locationHq - distanceInBlock
    }
}

function distanceFromHqInFeet (distanceInFeet) {
    if(distanceInFeet > 42){
        return (distanceInFeet - locationHq)*264
    }else if(distanceInFeet < 42) {
        return (locationHq - distanceInFeet)*264
    }
}

function distanceTravelledInFeet(locationHq, distanceInBlock) {
    if(distanceInBlock > 42){
        return (distanceInBlock - locationHq)*264
    }else if(distanceInBlock < 42){
        return(locationHq-distanceInBlock)*264
    }
}

function  calculatesFarePrice(locationHq, distanceInBlock) {
   const distance = distanceTravelledInFeet(locationHq, distanceInBlock);
   if (distance <= 400){
    return 0;
   }else if (distance <= 2000){
    return 2.56
   }else  if (distance <= 2500){
    return 25
   }else if (distance > 2500){
    return "cannot travel that far"
   }
}
