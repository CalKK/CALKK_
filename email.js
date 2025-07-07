  const form = document.getElementById('contactForm');
  const responseMessage = document.getElementById('formMessage'); // Updated to match the HTML ID

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim()
    };

    try {
      const response = await fetch('http://localhost:3000/contact', { // Updated URL to match the server endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        responseMessage.textContent = "Message sent successfully!";
        responseMessage.className = "message success"; // Updated class names to match the CSS
        form.reset();
      } else {
        responseMessage.textContent = result.error || "Failed to send message.";
        responseMessage.className = "message error"; // Updated class names to match the CSS
      }
    } catch (error) {
      responseMessage.textContent = "Error sending message.";
      responseMessage.className = "message error"; // Updated class names to match the CSS
    }
  });

