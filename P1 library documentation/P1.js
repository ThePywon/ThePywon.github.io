var slides = document.getElementsByClassName("slide");
var boards = document.getElementsByClassName("board");

for(var i = 0; i < slides.length; i++)
  slides[i].style.display = "none";

for(var i = 0; i < boards.length; i++)
{
  var size = 0;
  var titles = boards[i].getElementsByClassName("titles")[0].getElementsByTagName("div");
  for(var _i = 0; _i < titles.length; _i++)
    size+=150;
  boards[i].style.height = size + "px";
}

function show(index)
{
  for(var i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";
    if(index == i)
    {
      slides[i].style.display = "block";
      slides[i].scrollIntoView();
    }
  }
}

show(8);
