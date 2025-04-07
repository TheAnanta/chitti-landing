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
