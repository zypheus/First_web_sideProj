document.getElementById('email').addEventListener('click', function() {
    const recipient = 'jlplegario@gmail.com';
    const subject = 'Hello from your website!';
    const body = 'This is my message content...';
    
    // Encode special characters for proper URL formatting
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
});