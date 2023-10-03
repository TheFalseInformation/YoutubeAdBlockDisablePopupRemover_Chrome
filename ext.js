chrome.webNavigation.onCommitted.addListener(function(details) {
  // Die ID des Elements wird aus der Benutzereingabe abgerufen
  var id = document.getElementById("ytd-popup-container");

  // Wenn das Element gefunden wurde, wird es blockiert oder unsichtbar gemacht
  if (id) {
    // Das Element wird blockiert
    // id.setAttribute("style", "display: none");

    // Das Element wird unsichtbar gemacht
    id.style.display = "none";
	id.remove();
  }
});