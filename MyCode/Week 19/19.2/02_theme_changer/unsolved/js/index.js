
// Script to open and close sidebar
$('#enter').on('click' , function()
{
  var task = $('#todoItem').val();
  $('#todoList') .append("<div class='task'>" + task + "<div class ='x fas fa-times'></div></div>");
});

$(document) .on('click' , ',x' , function(){
  $(this).parent().remove();
}); 


function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}
