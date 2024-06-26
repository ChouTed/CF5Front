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
                        @change="handleChange(scope.row)"
                        :min="0" 
                        :max="10" 
                        style="width: 130px"
                    ></el-input-number>
                </template>
            </el-table-column>
        
        </el-table>
        <div>
        <el-table
            :data="orderData" >
            <el-table-column 
                prop="product_name" 
                label="Product Name" 
                >

            </el-table-column>
            <el-table-column 
                prop="product_quantity" 
                label="Quantity" 
                >

            </el-table-column>
            <el-table-column 
                >
                
            </el-table-column>
            
        </el-table>
        <el-button @click="saveOrder()" color="primary" :disabled="orderData.length == 0 ">SAVE ORDER</el-button></div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {

        return {
        //      customersNumber: 0,
        //      orderStatusButton: 'Order',
            tableData: [],
            orderData:[]
      };
    },
    methods: {
        orderStatus(){
            
        },
        handleChange(value) {
            console.log("patisa order")
            console.log(value.product_name + "qty:" + value.product_quantity)
            let alreadyExists = false
            for(let i in this.orderData){
                if (this.orderData[i].product_id == value.product_id ){
                    alreadyExists = true
                }       
            }
            if(alreadyExists ==true  && value.product_quantity == 0){
                console.log("hereee")
                let itemIdex = this.orderData.indexOf(value.product_id)
                console.log(itemIdex)
                this.orderData.splice(itemIdex-1,1)
            }
            else if(alreadyExists == false || this.orderData.length == 0){
                this.orderData.push(value)
            }

        },
        async loadPage(){
            let response = axios.get('http://localhost:5000/api/getMenu')

            return response
        },
        async saveOrder(){
            console.log(JSON.stringify(this.orderData))
            this.orderData = []
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