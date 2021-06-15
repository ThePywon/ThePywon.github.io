function Show(index)
{
  var div;
  if(index == 1)
    div = document.getElementById("bio");
  else if(index == 2)
    div = document.getElementById("projects");
  
  div.scrollIntoView(true);
}
