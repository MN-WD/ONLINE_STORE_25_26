<script setup>
  import { onMounted } from 'vue';
  import { productsStore } from "@/stores/products.js";
  import { cartStore } from '@/stores/cart';
  import Product from './Product.vue';

  // Récupération apiURL de productsStore
  const props = defineProps({
    apiURL: { type: String, required: true },
  });

  // Lance méthode init du store products et fait appel à l'API
  onMounted(async () => {
    productsStore.init(props.apiURL);
  });
</script>

<template>
    <section class="w-full md:w-2/3 px-4 mb-8">
      <!-- Products Section -->
      <h1 class="text-3xl font-bold mb-4">Nouveaux produits</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <product v-for="product in productsStore.products" :key="product.id" :product="product" @addProduct="cartStore.addOne" />
      </div>
    </section>
</template>

<style scoped></style>