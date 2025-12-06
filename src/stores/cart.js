import { ref, reactive, computed, watch } from 'vue';

// Initialisation du tableau des produits dans le localStorage
const cartItems = reactive([]);

// Prix livraison en v-model dans ShoppingCart
const deliveryCost = ref(5);

// Insère items (produits) dans le tableau cartItems un par un si cartItems existe, sinon renvoie un tableau vide
const init = () => {
    localStorage.cartItems
        ? JSON.parse(localStorage.cartItems).forEach((item) => {
            cartItems.push(item);
        })
        : []
};

// Ajout d'un produit dans localStorage. Quantity + 1 si le produit est déjà dans le panier
const addOne = (product) => {
    if (cartItems.find((item) => item.id == product.id)) {
        cartItems[cartItems.findIndex((item) => item.id == product.id)].quantity += 1;
    }

    else {
        cartItems.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
    }
};

// Supprime un produit (item) du panier
const deleteOneById = (id) => {
    cartItems.splice(cartItems.findIndex((item) => item.id == id), 1);
};

// Prix HTVA
const subTotal = computed(() =>
    cartItems.reduce((subTotal, item) => subTotal + item.price * item.quantity, 0).toFixed(2)
);

const taxeTVA = computed(() => (Number(subTotal.value) * 0.20).toFixed(2));

const totalPrice = computed(() =>
    (Number(subTotal.value) + Number(taxeTVA.value) + Number(deliveryCost.value)).toFixed(2)
);

// Watcher pour les modifications DOM => localStorage
watch(cartItems, (newValue) => {
    localStorage.cartItems = JSON.stringify(newValue);
});

// Export tableau et méthodes (vers ShoppingCart)
export const cartStore = reactive({
    init,
    cartItems,
    deliveryCost,
    addOne,
    deleteOneById,
    subTotal,
    taxeTVA,
    totalPrice,
});