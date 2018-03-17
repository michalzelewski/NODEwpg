window.onload = function() {
  var days = 60;
  if ( days > 7 ) {
    alert("More than 60 days to final project");
  } else {
    alert("Less than 7 days to final project");
  }
    var button = document.querySelector('button');
  
    button.addEventListener('click', function() {
      alert("Sorry! You can't log in yet");
    });
  }
