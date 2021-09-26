// A function that either adds or remove a class name
// to any <ul> children of the element with the id #menu
function toggleMobile()
{
  var menu = document.getElementById("menu");
  var children = menu.childNodes;

  for (var i = 0; i < children.length; i++)
  {
    var child = children[i];
    var isElement = (child.nodeName === "UL");
    if (isElement)
    {
      // Note: bad solution if the matching
      // element has another class name for another use. :-)
      // Possible solution: check if the class string contains
      // the class name we are going to add.
      // Doesn't matter in this particular case.
      var hasAnyClass = (child.className !== "")
      var nextClass = (hasAnyClass ? "" : "show");
      child.className = nextClass;
    }
  }
}
