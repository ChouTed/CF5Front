<template>
    <div class="tableOrderDialog" >
        <el-input-number class="orderPageTable" v-model="num" @change="handleChange" :min="0" :max="10"></el-input-number>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {

        return {
            num: 0,
            productName: 'doulevei to product name',
    //     customersNumber: 0,
    //     orderStatusButton: 'Order',
      };
    },
    methods: {
        orderStatus(){
            
        },
        handleChange(value) {
        console.log(value)
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

.tableOrderDialog{
    padding: 15px 15px 15px 15px;
    width: fit-content;
    margin: auto;
    background-color:  #edfff5cc;
}

</style>