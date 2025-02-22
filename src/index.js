import "/src/css/style.css"
import sectionAccueil from "/src/js/sectionAccueil.js"
import sectionMenu from "/src/js/sectionMenu.js"
import sectionContact from "/src/js/sectionContact.js"

const _main = document.querySelector(".main")

const _allButtonsNav = document.querySelectorAll(".header__button")
for (const _buttonNav of _allButtonsNav) {
	_buttonNav.addEventListener("click", (e) => {
		toggleNav(e.target)
	})
}

function toggleNav(clickedButton) {
	window.scrollTo(0, 0);
	_main.innerHTML = ""
	for (const _buttonNav of _allButtonsNav) {
		_buttonNav.classList.remove("button--disabled")
	}
	clickedButton.classList.add("button--disabled")
	let newContent
	switch (clickedButton.dataset.homeNav) {
		case "accueil":
			newContent = sectionAccueil
			break
		case "menu":
			newContent = sectionMenu
			break
		case "contact":
			newContent = sectionContact
			break
	}
 	_main.append(newContent)
}

toggleNav(document.querySelector(".header__button[data-home-nav='accueil']"))