function scuberGreetingForFeet(feet){
  if (feet <=399) { 
    return 'This one is on me!';} 
    // gives customers a free sample if the ride is less than or equal to 400 feet
  else if (feet >400 && feet < 2500) {
    return 'I will gladly take your thirty bucks.';
    // charges 30 dollars for a distance over 2000 feet'
  }
  else if (feet > 2500) {
    return 'No can do.';
    // does not allow rides over 2500 feet
} 
}
  function ternaryCheckCity(city){
    let city = NYC;
 
    city = NYC ? (city = true) : (city= false);
    // => true
   return "Ok, sounds good."
  }
function switchOnCharmFromTip(){

}