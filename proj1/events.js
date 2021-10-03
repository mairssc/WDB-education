const about = document.getElementById("about");
const work = document.getElementById("work");
const resume = document.getElementById("resume");
const contact = document.getElementById("contact");
const clickInfo = document.getElementById("click-info");
const contentClick = document.getElementById("content-click");
const insta = document.getElementById("insta");
const facebook = document.getElementById("facebook");
const discord = document.getElementById("discord");



const aboutString = "Hello! &#128075 My name is Sean Mairs and I am studying computer science at UC Berkeley. I am currently pursuing a course involving full stack web development, although I also have a passion for data science and software systems!";
const workString = "Languages: python, html/css/js, java, scheme, sql <br> <br> Python libraries: numpy, pandas <br> <br> Work Experience: Tutoring for Algebra 1 and Geometry";
// const resumeString = "resume pic lol XD";
const contactString = "contact links lmao";
const instalink = "https://www.instagram.com/mairs.sean"
const facebooklink = "https://www.facebook.com/sean.mairs.988";
const discordlink = "https://discordapp.com/users/mekro30#7320";
const resumelink = "https://docs.google.com/document/d/1PEX40vA1fgYKJYuCH3Nw_v1Aam4lpnB-snrS5NkAoY4/edit?usp=sharing";

const instaText = document.createTextNode("Instagram: @mairs.sean");
const facebookText = document.createTextNode("Facebook: sean.mairs");
const dicordText = document.createTextNode("Discord: mekro30");

//update if new link is added
const contactLinks = [insta, facebook, discord];
const contactTexts = [instaText, facebookText, dicordText];
const contactHref = [instalink, facebooklink, discordlink];


function cleanseLinks() { 
    for (i = 0; i < contactLinks.length; i++) {
        if (contactLinks[i].hasChildNodes) {
            contactLinks[i].innerText = "";
        }
        contactLinks[i].title = "";
        contactLinks[i].href = "";
    }
}

function generateLinks() {
    for (i = 0; i < contactTexts.length; i++) {
        contactLinks[i].appendChild(contactTexts[i]);
        contactLinks[i].style.color = "white";
        contactLinks[i].title = "contact-info";
        contactLinks[i].href = contactHref[i];
    }
}


about.addEventListener('click', (event) => {
    contentClick.innerHTML = aboutString;
    cleanseLinks();
})

work.addEventListener('click', (event) => {
    contentClick.innerHTML = workString;
    cleanseLinks();
})

resume.addEventListener('click', (event) => {
    cleanseLinks();
    window.open(resumelink, '_blank').focus();
})

contact.addEventListener('click', (event) => {
    console.log("made it")
    contentClick.innerHTML = "";
    if (contactLinks[0].title != "contact-info") {
        generateLinks();
    }
})

