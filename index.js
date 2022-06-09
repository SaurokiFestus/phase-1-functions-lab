// Code your solution in this file!
// function distanceFromHqInBlocks(value){
//     if(value > 42){
//         return value - 42;
//     }else {
//         return 42 - value
//     }
// }

// function distanceFromHqInFeet(value){
//     return distanceFromHqInBlocks(value) * 264;
// }

// function distanceTravelledInFeet (start, destination) {
//     if (start < destination) {
//       return (destination - start) * 264;
//     } else {
//       return (start - destination) * 264;
//     }
//   }

//   function calculatesFarePrice (start, destination) {
//     const distance = distanceTravelledInFeet(start, destination);
  
//     if (distance <= 400) {
//       return 0
//     } else if (distance > 400 && distance <= 2000) {
//       return .02 * (distance - 400);
//     } else if (distance > 2000 && distance < 2500) {
//       return 25
//     } else {
//       return "cannot travel that far";
//     }
//   }









































function distanceFromHqInBlocks(value){
  if(value > 42){
    return value - 42
  }else {
    return 42 - value
  }
}

// function distanceFromHqInFeet(value){
//  return distanceFromHqInBlocks(value) * 264
// } 

// function distanceFromHqInFeet(start, destination){
//   if (start < destination){
//     return (destination - start) * 264
//   }else{
//     return (start - destination) * 264
//   }
// }

function distanceFromHqInFeet(value){
    return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet (start, destination) {
    if (start < destination) {
      return (destination - start) * 264;
    } else {
      return (start - destination) * 264;
    }
  }

function calculatesFarePrice (start, destination) {
  const location = distanceTravelledInFeet (start, destination)

  if (location <= 400){
    return 0;
  }else if(location > 400 && location <=2000 ){
    return (location - 400) * .02
  }else if(location > 2000 && location <=2500){
    return 25
  }else{
    return "cannot travel that far"
  }
}

