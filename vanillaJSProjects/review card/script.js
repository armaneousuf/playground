const reviews = [
  {
    id: 1,
    name: 'sara jones',
    job: 'UX DESIGNER',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    text: "Tired of boring layouts? This tool completely changed how I prototype. The UI is incredibly snappy, and the flexbox utilities saved me hours of wrestling with CSS. Highly recommend to any designer looking to speed up their workflow.",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'WEB DEVELOPER',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    text: "As a front-end engineer, clean structure is everything to me. This project template is lightweight, doesn't ship with bloated dependencies, and works flawlessly out of the box. Integrating the logic took less than five minutes.",
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'INTERN',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    text: "I was tasked with building a testimonial slider during my first week, and looking at this array structure made everything click. The separation of data from the DOM manipulation logic is a textbook example of good coding practices.",
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'THE BOSS',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee portland iaculos bitters chambray hammock locavore wolf kombucha microdosing.",
  }
];

const img = document.querySelector('#person-image');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    // console.log(person);
    showData()
})

function showData(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}