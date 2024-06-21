<template>
    <table>
                <tr>
                    <th>Product</th>
                    <th>quantity</th>

                </tr>    
    </table>
</template>

<script>

import axios from 'axios';

export default {
    data() {

        return {
            productName: 'doulevei to product name',
    //     customersNumber: 0,
    //     orderStatusButton: 'Order',
      };
    },
    methods: {
        orderStatus(){
            
        }
    },
    mounted () {
        console.log("works")
        axios
            .get('http://localhost:5000/getMenu')
            .then(response => (this.productName = response))
        console.log(this.productName);
    }
  };
</script>

<style>
</style>