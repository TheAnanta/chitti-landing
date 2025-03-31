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
