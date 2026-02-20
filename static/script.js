particlesJS("particles-js", {
  particles: {
    number: { value: 40 },
    size: { value: 3 },
    color: { value: "#26a69a" },
    line_linked: { enable: true, color: "#90caf9" }
  }
});

function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

/* Menu Toggle */
function toggleMenu(){
    document.getElementById("nav-menu").classList.toggle("active");
}

/* Auto Close Menu */
document.querySelectorAll("#nav-menu a").forEach(link=>{
    link.addEventListener("click", ()=>{
        document.getElementById("nav-menu").classList.remove("active");
    });
});

/* WhatsApp Booking */
document.getElementById("appointmentForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const child = document.getElementById("child").value;
    const concern = document.getElementById("concern").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const message = `Appointment Request:
Parent Name: ${name}
Child Name: ${child}
Concern: ${concern}
Preferred Date: ${date}
Preferred Time: ${time}`;

    const url = `https://wa.me/919883420656?text=${encodeURIComponent(message)}`;
    window.open(url,"_blank");
});

/* Scroll Reveal */
window.addEventListener("scroll", ()=>{
    document.querySelectorAll(".reveal").forEach(el=>{
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if(elementTop < windowHeight - 100){
            el.classList.add("active");
        }
    });
});
