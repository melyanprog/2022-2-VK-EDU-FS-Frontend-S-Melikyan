import "../css/main.css";
import "../css/chats/chats_header.css";
import "../css/chats/chats_body.css";
import "../css/chats/chats_cr_button.css";

const chat = document.querySelector(".chat");

chat.addEventListener("click", goToDialog.bind(this));

function goToDialog() {
  window.location.href = "./dialog.html";
}
