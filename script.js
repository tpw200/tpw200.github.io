var time = new Date();

if (time.getHours() > 6 && time.getHours() <= 12) {
     document.body.style.backgroundColor = "orange"; 
} else if (time.getHours() > 12 && time.getHours() <= 18) {
     document.body.style.backgroundColor = "yellow"; 
} else if (time.getHours() > 18 && time.getHours() <= 21) {
     document.body.style.backgroundColor = "blue"; 
} else if (time.getHours() <= 6 || time.getHours() > 21) {
     document.body.style.backgroundColor = "purple"; 
}