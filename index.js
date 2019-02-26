// var katzDeliLine[]; 
var number = 0;
function takeANumber(katzDeliLine) { // placeholders
katzDeliLine.push(number++); // pushed names into empty array
return (`Welcome. You are number ${number} `);
} // ${} inserts variables directly
function nowServing(katzDeliLine){
  let i = 0;
  while (i < katzDeliLine.length){
    i++;
  } // while loop will run until condition is false
    if (katzDeliLine.length === 0){ // if nobody is on line
      return "There is nobody waiting to be served";
    }
    else
      return (`Currently serving ${katzDeliLine.shift()};` //.shift()removes with first element in the array
    } // .(shift) removes the first person and called for the next

    function currentLine(katzDeliLine){
      var katzDeli = [];
      if (katzDeliLine.length === 0){
        return "The line is currently empty.";
      }
      for (var i = 0; i < katzDeliLine.length; i++) { // for loops run for a specific number or times
        katzDeli.push(`${i+1}, ${katzDeliLine[i]} `); // [i] has the value of 0
        return "The line is currently: " + katzDeliLine.join(".");} // will return: The line is currently:The line is currently empty
// .join() method joins the elements of an array into a string and returns a string
