chrome.webNavigation.onCommitted.addListener(function(details) {
  // Das Element wird mithilfe des DOM-Selectors gefunden
  document.getElementById('masthead-ad').remove();
  //const element1 = document.querySelector("div.style-scope ytd-video-masthead-ad-v3-renderer");
  const element2 = document.querySelector("div.style-scope ytd-popup-container");

  // Das Element wird gelöscht
  element.parentElement.removeChild(element);
  //element1.parentElement.removeChild(element1);
  element2.parentElement.removeChild(element2);
});
