const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {

        cards.forEach(c => c.classList.remove("float"));

        card.classList.add("float");

    });
});
const text = "Student Web Developer";
const typing = document.getElementById("typing");

let i = 0;

function typeWriter() {

  if (i < text.length) {

    typing.innerHTML += text.charAt(i);

    i++;

    setTimeout(typeWriter, 100);
  }

}

typeWriter();

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle(
    "light-mode"
  );

});
const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {

    topBtn.style.display = "block";

  } else {

    topBtn.style.display = "none";

  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

const form =
document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

  const message =
  document.getElementById("message").value;

  if (message.length < 10) {

    e.preventDefault();

    alert(
      "Message must be at least 10 characters."
    );

  }

});

document
.querySelectorAll(".view-project")
.forEach(button => {

  button.addEventListener("click", () => {

    alert(
      "Project details coming soon!"
    );

  });

});
let visits =
localStorage.getItem("visits");

if (!visits) {

  visits = 1;

} else {

  visits++;

}

localStorage.setItem(
  "visits",
  visits
);

document.getElementById(
  "visitor-count"
).innerHTML =
`Visitor Count: ${visits}`;