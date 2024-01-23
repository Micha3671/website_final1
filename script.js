// Referenzierung der Anker-Elemente
var registerLink = document.getElementById('registerLink');
var loginLink = document.getElementById('loginLink');

// Beispiel: Hinzufügen eines Event Listeners auf das Registrieren-Link-Klick-Ereignis
registerLink.addEventListener('click', function() {
    // Hier kannst du den Code ausführen, der nach dem Klicken auf das Registrieren-Link ausgeführt werden soll
    console.log('Registrieren-Link wurde geklickt!');
});

// Beispiel: Hinzufügen eines Event Listeners auf das Anmelden-Link-Klick-Ereignis
loginLink.addEventListener('click', function() {
    // Hier kannst du den Code ausführen, der nach dem Klicken auf das Anmelden-Link ausgeführt werden soll
    console.log('Anmelden-Link wurde geklickt!');
});