console.log("Document loaded");
// Change the countdown timer every 1 second
var countdownDate = new Date("Aug 26, 2025 18:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countdownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML =
    hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

function sendMailForDeletion() {
  console.log("Sending email for deletion...");
  window.location.href =
    "mailto:scorewithchitti@gmail.com?subject=Account Deletion&body=Request to delete my account with roll number " +
    document.getElementById("gitam-roll-number").value +
    ".";
}

function handleDeleteFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Show the confirmation dialog
  const confirmation = confirm("Are you sure you want to delete this item?");

  if (confirmation) {
    sendMailForDeletion();
    alert("An email has been sent to delete the item.");
  }
}

function addUserToPlayConsole() {
  const userEmail = prompt("Enter a email address to add to the Play Console.");

  fetch(
    "https://asia-south1-chitti-ananta.cloudfunctions.net/webApi/add-to-play-console",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
      }),
    }
  )
    .then((response) => response.text())
    .then((result) => alert(`Download from play store with ${userEmail}.`))
    .catch((error) => console.error(error));
}
