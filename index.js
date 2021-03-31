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
    city === 'NYC' ? true: false;
    return city === "NYC" ? "Ok, sounds good." : "No go.";
  
  }
function switchOnCharmFromTip(tip){

switch (tip) {
    case 'generous':
      return "Thank you so much.";
      
    case 'not as generous':
      return "Thank you.";
  
      default: 'if anything else';
        return "Bye.";
}
  
}