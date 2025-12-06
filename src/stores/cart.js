import { reactive, watch } from 'vue';

const cartItems = reactive([]);

const init = () => {
    localStorage.cartItems
        ? JSON.parse(localStorage.cartItems).forEach((item) => {
            cartItems.push(item);
        })
        : []
};

const addOne = (product) => {
    if (cartItems.find((item) => item.id == product.id)) {
        cartItems[cartItems.findIndex((item) => item.id == product.id)].quantity += 1;
    }

    else {
        cartItems.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
    }
};

const deleteOneById = (id) => {
    cartItems.splice(cartItems.findIndex((item) => item.id == id), 1);
};

watch(cartItems, (newValue) => {
    localStorage.cartItems = JSON.stringify(newValue);
});

export const cartStore = reactive({
    init,
    cartItems,
    addOne,
    deleteOneById,
});