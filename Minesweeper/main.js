var grid;
var elements;

//Get variables passed from setup.html in the local storage
var sizeX = parseInt(localStorage.getItem("sizeX")) || 15;
var sizeY = parseInt(localStorage.getItem("sizeY")) || 15;
var amount = parseInt(localStorage.getItem("amount")) || 60;

var colors = [
  "#0da100",
  "#93bf00",
  "#ffff00",
  "#edb600",
  "#ed7e00",
  "#ed3700",
  "#ff0000",
  "#990000"
]

var isDead = false;
var win = false;
var first = true;

var timer = 0;
var Update;
var flags = amount;

//Called on start/reset
function Start()
{
  //Clear the field and states
  document.getElementById("field").innerHTML = "";
  document.getElementById("face").src = "../Assets/Images/Smiley.png";
  isDead = false;
  win = false;
  first = true;
  timer = 0;
  document.getElementById("timer").innerHTML = "000";
  flags = amount;
  updateFlags();
  clearInterval(Update);

  //Clear the grids
  grid = [];
  elements = [];
  for(var i = 0; i < sizeX; i++)
  {
    grid[i] = [];
    elements[i] = [];
    for(var _i = 0; _i < sizeY; _i++)
      grid[i][_i] = 0;
  }

  //Place mines
  var valid = false;
  for(var i = 0; i < amount; i++)
  {
    var x;
    var y;
    valid = false;

    //Make sure it doesn't get placed at a previous location
    while(!valid)
    {
      x = parseInt(random(0, sizeX));
      y = parseInt(random(0, sizeY));

      valid = true;

      if(grid[x][y] == 1)
        valid = false;
    }

    //Place it
    grid[x][y] = 1;
  }

  //Create all the grid spots
  for(var y = 0; y < sizeY; y++)
    for(var x = 0; x < sizeX; x++)
    {
      var newSpot = document.createElement("div");
      newSpot.className = "spot";
      newSpot.posX = x;
      newSpot.posY = y;
      newSpot.oncontextmenu = function(){return false;};
      elements[x][y] = newSpot;
      document.getElementById("field").appendChild(newSpot);
    }

  //Calculate and set the game's width based on horizontal size of grid
  document.getElementById("main").style.width = (sizeX*18+7) + "px";
}

//return a random number between min (inclusive) and max (exclusive)
function random(min, max)
{
  return (Math.random()*(max-min))+min;
}

//Set the face's image on click
document.addEventListener("mousedown", function(event){
  if(event.button == 0 && !isDead && !win)
  {
    var position = getElementPos(event);

    if(grid[position.x][position.y] != 2 && grid[position.x][position.y] != 3 && grid[position.x][position.y] != 4)
      document.getElementById("face").src = "../Assets/Images/Danger.png";
  }
}, false);

//Reset the face's image on release of click
document.body.onmouseup = function(event){
  if(event.button == 0 && !isDead && !win)
    document.getElementById("face").src = "../Assets/Images/Smiley.png";
};

//Handle spot revealing
document.addEventListener("click", function(event){
  var position = getElementPos(event);

  if(position !== null && !isDead && !win)
    reveal(position);
}, false);

document.addEventListener("auxclick", function(event){
  var position = getElementPos(event);

  if(position !== null && !isDead && !win)
    toggleFlag(position);
}, false);

//Get the element's position data based on event (only works if the event comes from the document's DOM)
//!!ONLY GRID SPOTS HAVE POSITION DATA!! (added during creation)
function getElementPos(event)
{
  //Get the event target element
  event = event || window.event;
  var target = event.target || event.srcElement;

  var x;
  var y;

  //Check if the element has position data
  if(target.posX !== undefined && target.posY !== undefined)
    //Return the data
    return {"x": target.posX, "y": target.posY};
  else if(target.parentElement.posX !== undefined && target.parentElement.posY !== undefined)
    //Return the data
    return {"x": target.parentElement.posX, "y": target.parentElement.posY};
  //Return null in case of failure to find any position data
  else return null;
}

function reveal(pos)
{
  if(grid[pos.x][pos.y] != 2 && grid[pos.x][pos.y] != 3 && grid[pos.x][pos.y] != 4)
  {
    if(grid[pos.x][pos.y] == 1)
    {
      //If its the first move, replace the mine
      if(first)
      {
        var valid = false;
        var x;
        var y;

        //Remove mine
        grid[pos.x][pos.y] = 0;

        //Make sure it doesn't get placed at a previous location
        while(!valid)
        {
          x = parseInt(random(0, sizeX));
          y = parseInt(random(0, sizeY));

          valid = true;

          if(grid[x][y] == 1)
              valid = false;
        }

        //Place it
        grid[x][y] = 1;
      }
      else
      {
        //Death
        elements[pos.x][pos.y].className = "mine";
        death();
        return;
      }
    }

    elements[pos.x][pos.y].className = "revealed";
    grid[pos.x][pos.y] = 2;

    var count = 0;
    for(var y = -1; y < 2; y++)
      for(var x = -1; x < 2; x++)
        if(isInBound(pos.x+x, pos.y+y) && (grid[pos.x+x][pos.y+y] == 1 || grid[pos.x+x][pos.y+y] == 4))
          count++;

    if(count > 0)
    {
      elements[pos.x][pos.y].innerHTML = count;
      elements[pos.x][pos.y].style.color = colors[count-1];
    }
    else
    {
      for(var y = -1; y < 2; y++)
        for(var x = -1; x < 2; x++)
          if(isInBound(pos.x+x, pos.y+y))
            reveal({"x": pos.x+x, "y": pos.y+y});
    }
  }

  if(first)
    Update = setInterval(updateTimer,1000);

  first = false;

  if(checkWin())
  {
    win = true;
    document.getElementById("face").src = "../Assets/Images/Swag.png";
    alert("You won!\nYour time: " + timer + " seconds!");
  }
}

function toggleFlag(pos)
{
  if(grid[pos.x][pos.y] != 2)
  {
    if(grid[pos.x][pos.y] == 3)
    {
      grid[pos.x][pos.y] = 0;
      elements[pos.x][pos.y].innerHTML = "";
      flags++;
      updateFlags();
    }
    else if(grid[pos.x][pos.y] == 4)
    {
      grid[pos.x][pos.y] = 1;
      elements[pos.x][pos.y].innerHTML = "";
      flags++;
      updateFlags();
    }
    else if(grid[pos.x][pos.y] == 0 && flags > 0)
    {
      grid[pos.x][pos.y] = 3;
      var flag = document.createElement("img");
      flag.src = "../Assets/Images/Flag.png";
      flag.style.width = 12 + "px";
      flag.style.height = 12 + "px";
      flag.style.position = "absolute";
      elements[pos.x][pos.y].appendChild(flag);
      flags--;
      updateFlags();
    }
    else if(grid[pos.x][pos.y] == 1 && flags > 0)
    {
      grid[pos.x][pos.y] = 4;
      var flag = document.createElement("img");
      flag.src = "../Assets/Images/Flag.png";
      flag.style.width = 12 + "px";
      flag.style.height = 12 + "px";
      flag.style.position = "absolute";
      elements[pos.x][pos.y].appendChild(flag);
      flags--;
      updateFlags();
    }
  }
}

function checkWin()
{
  var hasWon = true;

  for(var y = 0; y < sizeY; y++)
    for(var x = 0; x < sizeX; x++)
    {
      if(grid[x][y] == 0)
        hasWon = false;
    }

  return hasWon;
}

function death()
{
  for(var y = 0; y < sizeY; y++)
    for(var x = 0; x < sizeX; x++)
      if(grid[x][y] == 1)
      {
        var mine = document.createElement("img");
        mine.src = "../Assets/Images/Mine.png";
        mine.style.width = 12 + "px";
        mine.style.height = 12 + "px";
        mine.style.position = "absolute";
        elements[x][y].appendChild(mine);
      }

  document.getElementById("face").src = "../Assets/Images/Death.png";
  isDead = true;
}

function isInBound(x, y)
{
  if(x < 0 || x >= grid.length || y < 0 || y >= grid[0].length)
    return false;
  return true;
}

function updateTimer()
{
  if(isDead || win)
  {
    clearInterval(Update);
    return;
  }

  timer += 1;

  if(timer.toString().length == 1)
    document.getElementById("timer").innerHTML = "00" + timer;
  else if(timer.toString().length == 2)
    document.getElementById("timer").innerHTML = "0" + timer;
  else
    document.getElementById("timer").innerHTML = timer;

  if(timer >= 999)
    clearInterval(Update);
}

function updateFlags()
{
  if(flags.toString().length == 1)
    document.getElementById("flags").innerHTML = "00" + flags;
  else if(flags.toString().length == 2)
    document.getElementById("flags").innerHTML = "0" + flags;
  else
    document.getElementById("flags").innerHTML = flags;
}

//Make it call on start
Start();
