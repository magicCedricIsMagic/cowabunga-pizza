export function displayMoney(price) {
	return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "USD", currencyDisplay: "narrowSymbol" }).format(price)
}