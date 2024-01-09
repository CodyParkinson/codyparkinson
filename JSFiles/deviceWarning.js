function displayDeviceWarning() {
    var modal = document.getElementById("myModal");
  
    if (window.innerWidth < 768) { // Adjust this threshold as needed
      modal.style.display = "block";
    }
  
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      modal.style.display = "none";
    }
  }
  
  window.addEventListener("load", displayDeviceWarning);
  