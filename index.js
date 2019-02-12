
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    var firstInLine = katzDeliLine.shift();
    return (`Currently serving ${firstInLine}.`);
  }
  else {
    return ("There is nobody waiting to be served!");
  }
}

function currentLine(deliLine){
  if (deliLine.length === 0){
    return ("The line is currently empty.")
  }
  else {
      // create incomplete variable that we continuously add to
      var sumString = "The line is currently: ";
      // looping through the deliLine array.
      for(var i = 0; i < deliLine.length; i++){
      // check if we are not at the last element
        if(i !== deliLine.length - 1) {
          // add comma at the end.
          sumString = sumString + `${i + 1}. ${deliLine[i]}, `;
        }
        else {
          // if last element, do not add comma at the end
          sumString = sumString + `${i + 1}. ${deliLine[i]}`;
        }
    }

      return (sumString)
  }
}
