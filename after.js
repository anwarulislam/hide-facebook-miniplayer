// this code will be executed after page load
const probableCloseBtnAttr = "Close Watch and Scroll";
(function () {
  // set interval with 500 ms look for the close button and click it
  setInterval(() => {
    const probableCloseBtn = document.querySelector(
      `[aria-label="${probableCloseBtnAttr}"]`
    );
    console.log(probableCloseBtn);
    if (probableCloseBtn) {
      probableCloseBtn.click();
    }
  }, 1000);
})();
