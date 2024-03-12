<script setup lang="ts">
    import { ref,  computed } from 'vue'
    import { type Product, getProducts } from "@/model/products";
    import ProductCard from '@/components/ProductCard.vue';
    import FlyOut from '@/components/FlyOut.vue';
    import { addToCart, isOpen } from '@/viewModel/cart';
    import ShoppingCart from '@/components/ShoppingCart.vue';


    const products = ref([] as Product[]) //starts with emty array
    // const products = ref(getProducts())   //will work but not recommended

    products.value = getProducts()

</script>

<template> <!-- make a product card component -->
    <div class="product-list">
        <!--v-for="product in products" :key="product.id"-->            <!--product.id incorrect cuz prodyct not number-->
        <ProductCard    v-for="product in products" :key="product.id"
                        :product="product" @addToCart="addToCart"
                    />
    </div>


    <!--pass the flyout -->
    <!--instead of div class flyout just flyout -->
    <!--bind is open come when you put that fuction in the flyout file-->
    <FlyOut: isOpen="isOpen">
        <ShoppingCart />
    </FlyOut:>
</template>

<!--<style scoped> what does this do? 
        
-->
<style>
    .product-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>
