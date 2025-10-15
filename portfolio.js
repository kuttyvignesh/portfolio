var typed = new Typed('#typewriter', {
                    strings: ["Frontend Developer...", "Full Stack Developer...", "Software Engineer...", "Python Developer..."],
                    typeSpeed: 100,
                    backSpeed: 50,
                    loop: true
                });

const greeting = document.getElementById('greeting');
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "🌞 Good Morning, Welcome to My Portfolio!";
} else if (hour < 18) {
  greeting.textContent = "🌤 Good Afternoon, Welcome to My Portfolio!";
} else {
  greeting.textContent = "🌙 Good Evening, Welcome to My Portfolio!";
}