window.onload= function() {
	document.getElementById('loading').style.display = "none";
  document.querySelector('body').classList.remove('load');
}

document.getElementById('toggle').addEventListener('click', btn);

function btn() {
  var left = document.getElementById('left');
  var right = document.getElementById('right');

  if(left.className === "nav-left" && right.className === "nav-right") {
    left.className += " responsive";
    right.className += "responsive";
  } else {
    left.className = "nav-left";
    right.className = "nav-right";
  }
}