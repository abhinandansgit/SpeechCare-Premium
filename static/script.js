particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js/particles.json');

function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

document.getElementById("appointmentForm").addEventListener("submit", function(e){
    e.preventDefault();
    const formData = new FormData(this);

    fetch("/appointment",{
        method:"POST",
        body:formData
    }).then(res=>res.json())
    .then(()=>alert("Appointment Booked Successfully"));
});