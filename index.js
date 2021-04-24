
num = 0
  
function takeANumber(line){
  num++
   line.push(num) 
  return `Welcome, your number ${num}. You are number ${line.length} in line.`
}



function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else{

  return `Currently serving ${line.shift()}.`
}}
  

var line = []

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  }
  var i = 0;
  while (i < katzDeli.length) {
    line.push(` ` + [i+1]+`. `  + katzDeli[i])
    i++;//i++ is the equivalent of i = i + 1
  
  } 
  return(`The line is currently:` + line);
} 
  


