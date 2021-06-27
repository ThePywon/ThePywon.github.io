var panelElements = document.getElementsByClassName("element");
var current = 0;

function Start()
{
  updatePanel();
}

function showLeft()
{
  current--;
  if(current < 0)
    current = panelElements.length-1;

  updatePanel();
}

function showRight()
{
  current++;
  if(current >= panelElements.length)
    current = 0;

  updatePanel();
}

function updatePanel()
{
  for(var i = 0; i < panelElements.length; i++)
    if(i != current)
      panelElements[i].style.visibility = "hidden";
    else
      panelElements[i].style.visibility = "visible";
}

var Update = setInterval(function(){

},50);

Start();
