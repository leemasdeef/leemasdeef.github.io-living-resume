AOS.init();

// testimonial slider
var splide = new Splide( '#carouselone', {
  type   : 'loop',
  perPage: 2,
  focus  : 'center',
  gap: '2rem',
} );

splide.mount();

// STAR slider
var splide1 = new Splide( '#carouseltwo',{
  perPage: 1,
  rewind : true,
} );

splide1.mount();

// h1 animation
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



  // hero page dropdown text

const dropdownEl = document.getElementById('experience-dropdown');
const dropdownDesc = document.querySelector('.experience-description');

const heroExpObject = [
  {
    id: "customer-service",
    description: "Esports Mentor, Hotel receptionist/Security Guard, Student Optometrist."
  },
  {
    id: "software-engineering",
    description: "Front End Developer, HTML/CSS/JS/Tailwind/Bootstrap, Prompt Engineer."
  },
  {
    id: "esports",
    description: "Professional Esports Athlete, Esports Mentor/Coach."
  },
  {
    id: "content-creation",
    description: "Esports Mentor/Coach, Social media content creator."
  },
  {
    id: "leadership",
    description: "Team leader of Esports team, Student Researcher. "
  },
  {
    id: "AI",
    description: "Prompt Engineer."
  },
  {
    id: "research",
    description: "Student Researcher @ Deakin University."
  },
  
]

const experienceSelector = (event) => {
  const selected = heroExpObject.find(item => item.id === event.target.value);
  dropdownDesc.innerHTML = selected.description;
  };

dropdownEl.addEventListener('change', experienceSelector);

// contact me button
const contactBtn = document.querySelector(".contact");
contactBtn.addEventListener("click", () => window.open("https://www.linkedin.com/in/samil-kip-a00537334/", "_blank"))