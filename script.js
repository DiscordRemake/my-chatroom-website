function sendMessage() {
    const message = document.getElementById('messageInput').value;
    if (message.trim() !== "") {
        const messagesDiv = document.getElementById('messages');
        messagesDiv.innerHTML += `<div>${message}</div>`;
        document.getElementById('messageInput').value = '';
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll to the bottom
    }
}
