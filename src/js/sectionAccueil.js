import logoImage from "/src/images/logo.webp"

const _section = document.createElement("section")
_section.classList = "section section-accueil"

const _section__logo = document.createElement("img")
_section__logo.classList = "section-accueil__logo"
_section__logo.src = logoImage
_section__logo.alt = "Cowabunga Pizza"
_section.append(_section__logo)

const _section__title = document.createElement("h1")
_section__title.classList = "section__title title title-lg"
_section__title.textContent = "Bienvenue"
_section.append(_section__title)

const _intro = document.createElement("div")
_intro.classList = "intro"

const _intro_div = document.createElement("div")
_intro_div.classList = "text-lg"
const _p1 = document.createElement("p")
_p1.innerHTML = "Quatre tortues d'enfer, <strong>dans la viiille</strong>\u00a0🎵"
const _p2 = document.createElement("p")
_p2.innerHTML = "Pizzaiolos d'écailles et <strong>de virtuooose</strong>&nbsp;🎵"
const _p3 = document.createElement("p")
_p3.innerHTML = "Ce sont des cuistos fantastiiiques, ils sortent les pelles à pizz' c'est <strong>le dé-liiice</strong>&nbsp;🎵"
_intro_div.append(_p1, _p2, _p3)

const _spacer = document.createElement("div")
_spacer.classList = "spacer spacer--vertical"

const _smallP = document.createElement("p")
_smallP.textContent = "Leonardo, Raphael, Donatello et Michelangelo vous accueillent du lundi au vendredi dans une ambiance bon délire dans leur superbe restaurant italien underground."

_intro.append(_intro_div, _spacer, _smallP)

_section.append(_intro)

export default _section