chrome.webNavigation.onCommitted.addListener(function(details) {
  // Finding Element with DOM-Sector
  document.getElementById('masthead-ad').remove();
  document.getElementById('style-scope ytd-popup-container').remove();
  document.getElementById('div.style-scope ytd-popup-container').remove();
  const element1 = document.querySelector("style-scope ytd-popup-container");
  const element2 = document.querySelector("div.style-scope ytd-popup-container");

  // The Element gets deleted
  element1.parentElement.removeChild(element1);
  element2.parentElement.removeChild(element2);
});
