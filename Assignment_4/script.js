function displayTopics(subjectId) {
    var topics = document.getElementById(subjectId);
    if (topics) {
    //  Displays if not displayed already, hides it if already displayed
    topics.style.display = topics.style.display === "block" ? "none" : "block"; 
    }
};

