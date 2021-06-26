function resetLimit()
{
  //Get input elements
  var sizeX = parseInt(document.getElementById("sizeX").value);
  var sizeY = parseInt(document.getElementById("sizeY").value);
  var limit = document.getElementById("amount");

  //Check if values are valid
  if(!isNaN(sizeX) && !isNaN(sizeY) &&
      sizeX >= 9 && sizeX <= 50 && sizeY >= 9 && sizeY <= 50)
  {
    //Set the new limit values
    limit.min = parseInt((sizeX*sizeY/100)*15);
    limit.max = parseInt((sizeX*sizeY/100)*30);

    //Clamp the current value
    if(parseInt(limit.value) < parseInt(limit.min))
      limit.value = limit.min;
    else if(parseInt(limit.value) > parseInt(limit.max))
      limit.value = limit.max;
  }
}

function setup()
{
  //Get input elements
  var inputs = {"sizeX": document.getElementById("sizeX"),
                "sizeY": document.getElementById("sizeY"),
                "amount": document.getElementById("amount")};

  //Ignore if input is invalid
  if(!inputs.sizeX.checkValidity() || !inputs.sizeY.checkValidity() || !inputs.amount.checkValidity())
    return;

  //Put the inputs directly in the local storage
  localStorage.setItem("sizeX", inputs.sizeX.value);
  localStorage.setItem("sizeY", inputs.sizeY.value);
  localStorage.setItem("amount", inputs.amount.value);
}

resetLimit();
