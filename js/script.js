var feedbackButton = document.querySelector(".map-form-btn");
var feedbackForm = document.querySelector(".feedback-form");
var feedbackFormOverlay = document.querySelector(".feedback-form-overlay");

var feedbackNameInput = document.querySelector("#feedback-guest-name-input");
var feedbackEmailInput = document.querySelector("#feedback-guest-email-input");
var feedbackTextInput = document.querySelector("#feedback-guest-textarea-input");
var feedbackDoneButton = document.querySelector("#feedback-form-button");

var feedbackNameFromLocalStorage = localStorage.getItem("feedbackNameInput");
var feedbackEmailFromLocalStorage = localStorage.getItem("feedbackEmailInput");

var popupCloseBtn = document.querySelector(".popup-form-close-btn");

feedbackButton.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackForm.classList.add("popup-visible");
  feedbackFormOverlay.classList.add("popup-visible");

  if (feedbackNameFromLocalStorage) {
    feedbackNameInput.value = feedbackNameFromLocalStorage;
    feedbackEmailInput.value = feedbackEmailFromLocalStorage;
    feedbackTextInput.focus();
  }
  else {
    feedbackNameInput.focus();
  }
});

popupCloseBtn.addEventListener("click", function(event) {
  event.preventDefault();
  closePopup();
});

feedbackFormOverlay.addEventListener("click", function(event) {
  event.preventDefault();
  closePopup();
});

feedbackDoneButton.addEventListener("click", function(event) {

  if (!feedbackNameInput.value) {
    feedbackForm.classList.add("popup-error");
    feedbackNameInput.focus();

  } else if (!feedbackEmailInput.value) {
    feedbackForm.classList.add("popup-error");
    feedbackEmailInput.focus();

  } else if (!feedbackTextInput.value) {
    feedbackForm.classList.add("popup-error");
    feedbackTextInput.focus();
  }
});

feedbackForm.addEventListener("submit", function(event) {

  if (!feedbackNameInput.value || !feedbackEmailInput.value || !feedbackTextInput.value) {
    event.preventDefault();

  } else {
    localStorage.setItem("feedbackNameInput", feedbackNameInput.value);
    localStorage.setItem("feedbackEmailInput", feedbackEmailInput.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    closePopup();
  }
});

function closePopup() {
  feedbackForm.classList.remove("popup-error");
  feedbackForm.classList.remove("popup-visible");
  feedbackFormOverlay.classList.remove("popup-visible");
}
