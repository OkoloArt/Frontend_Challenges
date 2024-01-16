var submitButton = $("#submit");
var rateButton = $(".rate");
var ratingScore = 0;
var ratingCard = $(".rating");
var thankYouCard = $(".thank-you");
var displayRating = $(".thank-you p").first();

submitButton.off("click").on("click", () => {
  displayRating.text(`You selected ${ratingScore} out of ${rateButton.length}`);
  ratingCard.css("visibility", "hidden");
  thankYouCard.css("visibility", "visible");
});

$(rateButton[0]).addClass("active");
ratingScore = $(rateButton[0]).text();

function setClick() {
  for (let index = 0; index < rateButton.length; index++) {
    let activeButton = rateButton[index];
    $(activeButton)
      .off("click")
      .on("click", () => {
        // Remove active class from all buttons
        rateButton.removeClass("active");
        $(activeButton).addClass("active");
        ratingScore = $(activeButton).text();
      });
  }
}

setClick();
