document.addEventListener("DOMContentLoaded", function() {
    var chatContainer = document.getElementById("chat-container");
    var messageInput = document.getElementById("message-input");
    var sendButton = document.getElementById("send-button");
  
    sendButton.addEventListener("click", function() {
      var message = messageInput.value;
      if (message !== "") {
        sendMessage(message);
        messageInput.value = "";
      }
    });
  
    function sendMessage(message) {
      var messageElement = document.createElement("p");
      messageElement.classList.add("message", "from-user");
      messageElement.innerText = message;
      chatContainer.appendChild(messageElement);
      
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  });
  