<template>
    <div class="tableOrderDialog" >
        <el-table
            class="tableOrderMenuDialog"
            :data="tableData" 
            > 
            <el-table-column 
                prop="product_name" 
                label="Product Name" 
                >
            </el-table-column>
            <el-table-column 
                prop="product_quantity" 
                label="Quantity"  >
                <template slot-scope="scope">
                    <el-input-number 
                        class="orderPageTable" 
                        v-model="scope.row.product_quantity"  
                        @change="handleChange"
                        :min="0" 
                        :max="10" 
                        style="width: 130px"
                    ></el-input-number>
                </template>
            </el-table-column>
        
        </el-table>
        <el-table
            :data="placeholder" >
            <el-table-column 
                prop="product_name" 
                label="Product Name" 
                >

            </el-table-column>
        </el-table>
    
    </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {

        return {
        //      customersNumber: 0,
        //      orderStatusButton: 'Order',
            tableData: []
      };
    },
    methods: {
        orderStatus(){
            
        },
        handleChange() {
        console.log("patisa order")

        
        },
        async loadPage(){
            let response = axios.get('http://localhost:5000/api/getMenu')

            return response
        },
    },
    async mounted  () {
        let response = await this.loadPage()
        let dataProducts = JSON.parse(JSON.stringify(response.data))

        for (let i in dataProducts){

            this.tableData.push({
                product_name: dataProducts[i].product_name,
                product_quantity: 0,
                product_id: dataProducts[i].product_id
            })
        }
    }

  };
</script>

<style>

.tableOrderDialog{
    display: flex;
    font-family: inherit;
    font-size: 3rem;
    padding: 15px 15px 15px 15px;
    gap: 15px;
    width: 800px;
    max-height: 75%;
    margin: auto;
    background-color:  #edfff5cc;
    border-radius: 5px;
    
    
}

.tableOrderMenuDialog{
    overflow-y: scroll;
}

</style>