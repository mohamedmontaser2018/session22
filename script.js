document.getElementById("navToggle").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});

const touchCards = [
  {
    image: "assets/card-firstaid.png",
    title: "First Aid",
    text: "Providing general safety and first aid supplies. Conducting the necessary first aid and referring emergency cases to hospitals when necessary.",
  },
  {
    image: "assets/card-health.png",
    title: "Health education",
    text: "Conducting awareness and educational lectures on public health and the importance of eating healthy foods.",
  },
  {
    image: "assets/card-dental.png",
    title: "Dental Health and Safety",
    text: "Do a regular dental checkup. Spreading awareness and promoting healthy habits among students of basic grades.",
  },
  {
    image: "assets/card-insurance.png",
    title: "Student insurance",
    text: "The doctor or nurse handles simple ambulance cases, while the student is transferred to the hospital if necessary within the coverage program.",
  },
];

document.getElementById("touchCards").innerHTML = touchCards
  .map(
    (c) => `
    <div class="touch-card">
      <img src="${c.image}" alt="${c.title}" loading="lazy" />
      <h4>${c.title}</h4>
      <p>${c.text}</p>
    </div>`
  )
  .join("");

document.getElementById("teamGrid").innerHTML = Array.from({ length: 4 })
  .map(() => `<img src="assets/team-avatar.png" alt="DR: Ali Omar — Dentist" loading="lazy" />`)
  .join("");
