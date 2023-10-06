chrome.webNavigation.onCommitted.addListener(function(details) {
  // Das Element wird mithilfe des DOM-Selectors gefunden
  const element = document.querySelector(".style-scope ytd-enforcement-message-view-model");
  const element1 = document.querySelector("tp-yt-paper-dialog");

  // Das Element wird gelöscht
  if (element) {
    element.remove();
  }
  if (element1) {
    element1.remove();
  }
});
