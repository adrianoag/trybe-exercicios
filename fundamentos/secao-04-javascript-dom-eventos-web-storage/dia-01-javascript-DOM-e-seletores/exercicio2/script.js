// Background for urgent
let urgent = document.getElementsByClassName("emergency-tasks")
urgent[0].style.backgroundColor = "blue"

// Background not urgent
let notUrgent = document.getElementsByClassName("no-emergency-tasks")
notUrgent[0].style.backgroundColor = "gray"

// Title's background
let subtitles = document.querySelectorAll('h3')
// Urgents
subtitles[0].style.backgroundColor = 'purple'
subtitles[1].style.backgroundColor = 'purple'
// Not Urgents
subtitles[2].style.backgroundColor = 'brown'
subtitles[3].style.backgroundColor = 'brown'

// Title
let title = document.querySelector('header')
title.style.backgroundColor = 'green'

// Footer
let footer = document.querySelector('footer')
footer.style.backgroundColor = 'green'