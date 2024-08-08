function DisableBackButton() {
  window.history.forward();
}

DisableBackButton();
window.onload = DisableBackButton;
window.onpageshow = function (evt) {
  if (evt.persisted) DisableBackButton();
};
window.onunload = function () {
  void 0;
};

// Remove the spaces from the entered and generated code
function removeSpaces(string) {
  return string.split(" ").join("");
}
