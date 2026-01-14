export const navigate = (route = "carts", id = null) => {
	const container = document.querySelector("#app");
	container.innerHTML = "";
	sessionStorage.setItem("shop.page", route);

	switch (route) {
		case "carts": {
			container.innerHTML = "<carts-component />";
			break;
		}

		case "cart": {
			container.innerHTML = `<cart-component cartid="${id}" />`;
			break;
		}

		case "utilities": {
			container.innerHTML = "<utilities-component />";
			break;
		}
	}
}