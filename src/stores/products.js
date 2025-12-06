import { reactive } from 'vue';
import DB from "@/services/DB";

// Initialisation tableau des produits
const products = reactive([]);

// Utilisation méthodes DB pour faire appel à l'API par son URL
const init = async (apiURL) => {
    DB.setApiURL(apiURL);
    products.splice(0, 0, ...(await DB.findAll()));
};

// Export tableau et méthode (vers ProductList)
export const productsStore = reactive({
    init,
    products,
});