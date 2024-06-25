<template>
    <div class="tableOrderDialog" >
        <el-table
            :data="tableData" style="width: 100%"> 
        <el-table-column prop="product_name" label="Product Name" width="180">
        </el-table-column>
        <el-table-column prop="product_quantity" label="Quantity" width="180">
            <el-input-number class="orderPageTable" v-model="pproduct_quantity" @change="handleChange" :min="0" :max="10"></el-input-number>
        </el-table-column>
    </el-table>
        
    </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {

        return {
            num: 0,
            productName: 'doulevei to product name',
        //      customersNumber: 0,
        //      orderStatusButton: 'Order',
            tableData: [{
                product_name: 'pad taio',
                product_quantity: 0,
            }, 
            ]
      };
    },
    methods: {
        orderStatus(){
            
        },
        handleChange() {
        console.log("patisa order")
        console.log()
        },

    },
    mounted () {
        console.log("works")
        axios
            .get('http://localhost:5000/api/getMenu')
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