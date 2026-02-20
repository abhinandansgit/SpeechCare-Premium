particlesJS("particles-js", {
  particles: {
    number: { value: 50 },
    size: { value: 3 },
    color: { value: "#4db6ac" },
    line_linked: { enable: true, color: "#90caf9" }
  }
});

function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function toggleMenu(){
    const nav = document.getElementById("nav-menu");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

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

    const whatsappURL = `https://wa.me/919883420656?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
});
