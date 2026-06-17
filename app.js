const pages = {
  welcome: {
    title: "Välkommen",
    content: "Detta är din onboarding-plattform. Följ stegen i menyn."
  },
  role: {
    title: "Rollen",
    content: "Du arbetar som mötesbokare och bokar kvalificerade affärsmöten."
  },
  day: {
    title: "Arbetsdagen",
    content: "Din dag styrs av samtal, uppföljning och struktur."
  },
  calls: {
    title: "Samtal",
    content: "Fokusera på kvalitet i varje samtal, inte kvantitet."
  },
  tools: {
    title: "Verktyg",
    content: "CRM, kalender och telefon är dina viktigaste verktyg."
  },
  rules: {
    title: "Regler",
    content: "Följ alltid processer och kommunikationsstandard."
  },
  checklist: {
    title: "Checklista",
    content: "Se till att varje steg är korrekt genomfört innan du går vidare."
  },

  start: {
    title: "Start & upplägg",
    content: "Här börjar din utbildning. Bygg förståelse först."
  },
  booking: {
    title: "Mötesbokning",
    content: "Lär dig boka möten som faktiskt leder till affärer."
  },
  pitch: {
    title: "Pitch & värde",
    content: "Hur du presenterar värdet avgör din framgång."
  },
  objections: {
    title: "Invändningar",
    content: "Hantera motstånd lugnt och professionellt."
  }
};

// DOM elements
const menuItems = document.querySelectorAll("nav li");
const title = document.getElementById("title");
const contentBox = document.getElementById("contentBox");
const infoBox = document.getElementById("infoBox");

// click handler
menuItems.forEach(item => {
  item.addEventListener("click", () => {

    // remove active class
    menuItems.forEach(i => i.classList.remove("active"));

    // set active
    item.classList.add("active");

    const page = item.dataset.page;

    // update content
    if (pages[page]) {
      title.textContent = pages[page].title;
      contentBox.innerHTML = `<p>${pages[page].content}</p>`;
      infoBox.style.display = "none";
    }
  });
});
