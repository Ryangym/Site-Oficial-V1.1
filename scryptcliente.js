document.addEventListener('DOMContentLoaded', function() {
    const clientNames = document.querySelectorAll('.client-name');

    clientNames.forEach(clientName => {
        clientName.addEventListener('click', function() {
            const clientInfo = this.nextElementSibling;
            if (clientInfo.style.display === 'none' || clientInfo.style.display === '') {
                clientInfo.style.display = 'block';
            } else {
                clientInfo.style.display = 'none';
            }
        });
    });
});
