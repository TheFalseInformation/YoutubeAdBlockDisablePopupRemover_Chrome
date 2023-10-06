chrome.webNavigation.onCommitted.addListener(function(details) {
  // Finding Element for "Disable Your AdBlocker" Popup
  const element = document.querySelector(".style-scope ytd-enforcement-message-view-model");

  // Delete Element
  if (element) {
    element.remove();
  }
});
