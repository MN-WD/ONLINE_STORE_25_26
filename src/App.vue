<script setup>
  import AppHeader from '@/components/AppHeader.vue';
  import ProductList from '@/components/productList/ProductList.vue';
  import ShoppingCart from '@/components/shoppingCart/ShoppingCart.vue';
  import AppFooter from '@/components/AppFooter.vue';
</script>

<template>
  <AppHeader />
  <!-- Main content -->
  <main class="container mx-auto py-8 px-4 flex flex-wrap">
    <ProductList />
    <ShoppingCart />
  </main>
  <AppFooter />
</template>

<style scoped></style>
