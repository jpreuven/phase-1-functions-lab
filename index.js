function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42);
}

const distanceFromHqInFeet = function (num) {
  return distanceFromHqInBlocks(num) * 264;
};

const distanceTravelledInFeet = function (num1, num2) {
  return Math.abs(num1 - num2) * 264;
};

let feetDistance;
const calculatesFarePrice = function (start, destination) {
  feetDistance = distanceTravelledInFeet(start, destination);
  if (feetDistance <= 400) {
    return 0;
  } else if (feetDistance > 400 && feetDistance <= 2000) {
    return (feetDistance - 400) * 0.02;
  } else if (feetDistance > 2000 && feetDistance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
};
