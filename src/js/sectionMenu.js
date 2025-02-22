import { displayMoney } from "/src/js/textUtils.js"

const pizzas = [
	{
		img: "napolitaine.webp",
		name: "La Napolitaine",
		description: "Base tomate, mozzarella, feuilles vertes sur le dessus.",
		price: 10,
	},
	{
		img: "4-fromages.webp",
		name: "La Quatre Fromages",
		description: "Base tomate, emmental, gruyère, vache qui rit, babybel.",
		price: 14.40,
	},
	{
		img: "royale.webp",
		name: "La Royale",
		description: "Base tomate, mozzarella, champignons, origan.",
		price: 12,
	},
	{
		img: "predecoupee.webp",
		name: "La Prédécoupée",
		description: "Pour les pressés.\nLe petit +\u00a0: également un peu prémangée 👍",
		price: 18,
	},
	{
		img: "saumon.webp",
		name: "La Neptune",
		description: "Base crème, saumon, algues, étoiles de mer.",
		price: 14.50,
	},
	{
		img: "coeur.webp",
		name: "L'Amoureuse",
		description: "Base chamalow, guimauve, câlins, douceurs et bisous\u00a0💚",
		price: 999,
		priceAsterisk: true,
		asterisk: "L'amour est aveugle"
	},
	{
		img: "vege.webp",
		name: "La Végé",
		description: "Base gazon, orties, pelures d'oignon, ronces.",
		price: 13.50,
	},
	{
		img: "champi.webp",
		name: "La Championne",
		description: "Base crème, mozzarella, champignons, persil.",
		titleAsterisk: true,
		asterisk: "On a gagné aucun prix, mais elle a des champignons et champion ça ressemble à champignon, c'est pour ça, on l'a appelée la championne, parce que ça fait un genre de jeu de mot, vu qu'on apprécie l'humour.",
		price: 13,
	},
	{
		img: "ananas.webp",
		name: "La Nana",
		description: "Base tomate, ana - Nan mais c'est quoi ça on est un vrai resto ici nom d'un nunchaku\u00a0!",
		price: false,
	},
	{
		img: "mini.webp",
		name: "la mini",
		description: "Pour les toutes petites faims.",
		price: 9.99,
	},
	{
		img: "4-saisons.webp",
		name: "La Leonardo-Raphael-Donatello-Michelangelo",
		description: "Plus communément trouvée sous le nom de «\u00a0Quatre\u00a0Saisons\u00a0» dans les restaurants ennuyeux.",
		price: 44.44,
	},
	{
		img: "cramee.webp",
		name: "La Vesuvio",
		description: "Son délicat goût fumé est à tomber.",
		price: 12,
	},
]

const _section = document.createElement("section")
_section.classList = "section section-menu"

const _section__title = document.createElement("h1")
_section__title.classList = "section__title title-xl text-center"
_section__title.textContent = "Menu"

const _separator = document.createElement("hr")
_separator.classList = "separator separator--horizontal"

_section.append(_section__title, _separator)

for (const pizza of pizzas) {
	const _pizza = document.createElement("article")
	_pizza.classList = "pizza"

	const _pizza__photo = document.createElement("div")
	_pizza__photo.classList = "pizza__photo"
	const _pizza__photoFigure = document.createElement("figure")
	_pizza__photoFigure.classList = "pizza__photo-figure"
	const _pizza__photoImg = document.createElement("img")
	_pizza__photoImg.classList = "pizza__photo-img"
	_pizza__photoImg.alt = "Photo de la pizza"
	_pizza__photoImg.src = require(`/src/images/pizzas/${pizza.img}`)
	_pizza__photoFigure.append(_pizza__photoImg)
	_pizza__photo.append(_pizza__photoFigure)
	_pizza.append(_pizza__photo)

	const _pizza__name = document.createElement("h2")
	_pizza__name.classList = "title-sm pizza__name"
	_pizza__name.textContent = pizza.name
	if (pizza.titleAsterisk) {
		_pizza__name.innerHTML += `<span class="text-regular">*</span>`
	}
	_pizza.append(_pizza__name)
	
	const _pizza__description = document.createElement("p")
	_pizza__description.classList = "pizza__description"
	_pizza__description.textContent = pizza.description
	if (pizza.asterisk) {
		const _asteriskText = document.createElement("p")
		_asteriskText.classList = "pizza__asterisk text-sm"
		_asteriskText.textContent = `* ${pizza.asterisk}`
		_pizza__description.append(_asteriskText)
	}
	_pizza.append(_pizza__description)

	const pizza__price = document.createElement("p")
	pizza__price.classList = "pizza__price text-lg text-bold text-right"
	if (!pizza.price) {
		pizza__price.textContent = "Pas à vendre"
	}
	else pizza__price.textContent = displayMoney(pizza.price)
	if (pizza.priceAsterisk) {
		pizza__price.innerHTML += `<span class="text-regular">*</span>`
	}
	_pizza.append(pizza__price)

	const _separator = document.createElement("hr")
	_separator.classList = "separator separator--horizontal"

	_section.append(_pizza, _separator)
}

const _smallText = document.createElement("p")
_smallText.classList = "text-sm text-center"
_smallText.textContent = "Tous nos produits sont artisanaux et locaux, récoltés à la main, à proximité de nos égouts."
_section.append(_smallText)

export default _section