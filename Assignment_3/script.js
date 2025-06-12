
var hour = new Date().getHours();
var image = document.getElementById("img");

if (hour >= 6 && hour < 12) {
    image.src = "https://velvetescape.com/wp-content/uploads/2011/11/dawid-zawila-G3rw6Y02D0-unsplash.jpg"; // Morning
} else if (hour >= 12 && hour < 18) {
    image.src = "https://images.unsplash.com/photo-1577257107590-fc448601f16a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZ0ZXJub29uJTIwc3VufGVufDB8fDB8fHww"; // Afternoon
} else {
    image.src = "https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjB0aW1lfGVufDB8fDB8fHww"; // Night
    };
