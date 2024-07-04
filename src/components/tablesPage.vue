<template>
    <div class="tablesPage">
        <div class="locationIn">
            <h1>Inside Tables</h1>
            <button @click="showTable('01')" class="table capacity6">01</button>
            <button @click="showTable('02')" class="table capacity6">02</button>
            <button @click="showTable('03')" class="table capacity6">03</button>
            <button @click="showTable('04')" class="table capacity6">04</button>
            <button @click="showTable('05')" class="table capacity6">05</button>
            <button @click="showTable('06')" class="table capacity6">06</button>
            <button @click="showTable('07')" class="table capacity6">07</button>
            <button @click="showTable('08')" class="table capacity6">08</button>
            <button @click="showTable('09')" class="table capacity6">09</button>
            <button @click="showTable('10')" class="table capacity6">10</button>
            <button @click="showTable('11')" class="table capacity4">11</button>
            <button @click="showTable('12')" class="table capacity4">12</button>
            <button @click="showTable('13')" class="table capacity4">13</button>
            <button @click="showTable('14')" class="table capacity4">14</button>
            <button @click="showTable('15')" class="table capacity4">15</button>
            <button @click="showTable('16')" class="table capacity4">16</button>
            <button @click="showTable('17')" class="table capacity4">17</button>
            <button @click="showTable('18')" class="table capacity4">18</button>
            <button @click="showTable('19')" class="table capacity4">19</button>
            <button @click="showTable('20')" class="table capacity4">20</button>
        </div>
        <div class="locationOut">
            <h1>Outside Tables</h1>
            <button @click="showTable('21')" class="table capacity6">21</button>
            <button @click="showTable('22')" class="table capacity6">22</button>
            <button @click="showTable('23')" class="table capacity6">23</button>
            <button @click="showTable('24')" class="table capacity6">24</button>
            <button @click="showTable('25')" class="table capacity6">25</button>
            <button @click="showTable('26')" class="table capacity4">26</button>
            <button @click="showTable('27')" class="table capacity4">27</button>
            <button @click="showTable('28')" class="table capacity4">28</button>
            <button @click="showTable('29')" class="table capacity4">29</button>
            <button @click="showTable('30')" class="table capacity4">30</button>
        </div>
        <el-dialog
            title="Order"
            :visible.sync="showDialog"
            :before-close="closeDialog"
            style="border-color: aquamarine"
            width="fit-content"
            >
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
                    <el-button 
                        class="button" 
                        @click="deleteOrder()" 
                        color="primary" 
                        :disabled="currentOrderId <= 0  "
                    >Delete Order</el-button>
                    <el-button 
                        class="button" 
                        @click="placeOrder()" 
                        color="primary" 
                        :disabled="orderData.length == 0 "
                    >Place Order</el-button>
                </div>
            </div>
        </el-dialog>
        <el-dialog
            title="Order"
            :visible.sync="showDialogCustomers"
            :before-close="closeDialog"
            style="border-color: aquamarine"
            width="fit-content"
            >
            <div class="tableStatus">
                Customers
                <el-input-number class="customersNumber" v-model="customersNumber" @change="handleChangeCustomers" :min="1" :max="4"  ></el-input-number>
                <button @click="orderStatus()" >{{ orderStatusButton }}</button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'tablesPage',

    data() {
        return{
            showDialog:false,
            tableData:[],
            orderData:[],
            showDialogCustomers:false,
            customersNumber: 0,
            orderStatusButton: 'Order',
            currentTableNumber :'',
            existingOrder:false,
            currentOrderId:0

        }
    },

    methods: {
        openTableStatus()   {
            // if() {
            //     this.$router.push({ name: 'tableStatus' });
            //     }
            },
        
        async showTable(tableNumber) {
            //create Order first 
            this.showDialogCustomers = true;
            this.currentTableNumber = tableNumber;
            // this.$router.push({ name: 'tableStatus'});
            console.log(tableNumber)
        },
        closeDialog(){
            
            if (this.showDialog){
                this.showDialog = false;
                this.orderData = []
                this.tableData = []
                this.showDialogCustomers = false;
                this.customersNumber = 0;
                this.currentTableNumber = '';
                this.existingOrder = false;
                this.currentOrderId = 0;

            }
        },

        handleChange(value) {
            console.log("patisa place order")
            console.log(value.product_name + "qty:" + value.product_quantity)
            let alreadyExists = false
            for(let i in this.orderData){
                if (this.orderData[i].product_id == value.product_id ){
                    alreadyExists = true
                    console.log(i)
                }       
            }
            if(alreadyExists ==true  && value.product_quantity == 0){
                console.log("hereee")
                let itemIdex = this.orderData.indexOf(value)

                this.orderData.splice(itemIdex,1)
            }
            else if(alreadyExists == false || this.orderData.length == 0){
                this.orderData.push(value)
            }

        },
        async loadPage(){
            let response = axios.get('http://localhost:5000/api/getMenu')

            return response
        },
        async placeOrder(){
            console.log(JSON.stringify(this.orderData))
            //createOrder
            let body = {}
            let data = []
            // table_id:this.orderData[i].table_id,
            for(let i in this.orderData){
                data.push({
                        product_id:this.orderData[i].product_id,
                        product_quantity:this.orderData[i].product_quantity
                    })
                
            }

            body = {
                table_id:this.orderData[0].table_id,
                data: data
            }
            console.log(body.data)
            let  response = null
            if(this.currentOrderId == 0){
                 response = await axios.post('http://localhost:5000/api/createOrder', 
                body, { withCredentials: true });
                console.log(response)
            }else{
                response = await axios.post('http://localhost:5000/api/updateOrder/' +parseInt(this.currentTableNumber).toString()+'/' +this.currentOrderId, 
                body, { withCredentials: true });
            }
            
            
            console.log(body)

            console.log(response)
            //insert data to order
            // this.orderData = []
            this.closeDialog()
        },
        handleChangeCustomers(value) {
            console.log(value)
        },
        async orderStatus(){
            // this.$router.push({ name: 'orderPage' })
            let response = await this.loadPage()
            let orderDetails = await this.getExistingOrder(this.currentTableNumber)
            console.log(orderDetails)
            
            let dataProducts = JSON.parse(JSON.stringify(response.data))

            for (let i in dataProducts){

                this.tableData.push({
                    product_name: dataProducts[i].product_name,
                    product_quantity: 0,
                    product_id: dataProducts[i].product_id,
                    table_id:this.currentTableNumber
                })
            }

            if (orderDetails.data.length > 0 ){
                this.existingOrder = true;
                this.currentOrderId = orderDetails.data[0].order_id
                for(let j in orderDetails.data){
                    // this.orderData['order_id'] = 
                    for (let i in this.tableData){
                        if (orderDetails.data[j].product_id == this.tableData[i].product_id){
                            this.orderData.push(this.tableData[i])
                            let dataIndex = this.orderData.indexOf(this.tableData[i]);
                            this.orderData[dataIndex].product_quantity = orderDetails.data[j].product_quantity

                        }
                        
                    }
                    
                }
                
            }
            console.log("this orderdat")
            console.log(this.orderData)
            this.showDialog = true;
            
        },
        async getExistingOrder(tabel_no){
            let url = 'http://localhost:5000/api/getOrder/' + parseInt(tabel_no).toString()
            console.log(url)
            let response = axios.get(url)

            return response
        },
        deleteOrder(){
            console.log(this.currentOrderId)
        }

    }
        
        

}


</script>

<style>
    .tablesPage{
    width: fit-content;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    gap: 15px;
    grid-template-columns: auto auto auto auto auto;
    justify-content: center;
    flex-direction: row;
    align-items: start;
    
    }

    @media (max-width: 830px) {
        .tablesPage{
            flex-direction: column;
        }
    }

    h1{
        grid-column: 1 / 6;
    }


    .locationIn, .locationOut{
        display: grid;
        grid-template-columns: auto auto auto auto auto ;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        margin-left: auto;
        margin-right: auto;

        justify-content: center;

        padding: 15px 15px 15px 15px;
        background-color:  #edfff5de;
        border-radius: 15px;
    }

    .locationOut{
        background-color: #fbedffde;
    }

    .table{
        display: flex;

        margin: 15px 15px 15px 15px;
        border-radius: 5px;
        border-style:none; 
        background-color: #7af3fc;
        font-family: inherit;
        font-size: 2rem;
        text-align: left;
    }

    .table:hover{
        background-image:radial-gradient( #7af3fc, #9d7afc);
    }

    .capacity6 {
        width: 120px;
        height: 70px;
    }

    .capacity4{
        width: 70px;
        height: 70px;
    }

    button:hover{
        cursor: pointer;
    }
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
    .tableStatus{
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: start;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        gap: 5px;
        font-size: 2rem;

        margin-left: auto;
        margin-right: auto;

        padding: 15px 15px 15px 15px;
        background-color:  #edfff5cc;
        border-radius: 15px;
        }

        .customersNumber{
            font-family: inherit;
            font-size: 2rem;
            width: 280px;
            border-radius: 20px;
            border-style:none;
        }

        .tableStatus>button{
            align-self: end;
            font-family: inherit;
            font-size: 1.5rem;
            font-weight: 600;
            margin-top: 15px;
            padding: 10px 40px 10px 40px;
            border-radius: 40px;
            border-style:none;
            background-image: radial-gradient(#ffaec9,#ff7f27);
        }

        .tableStatus>button:hover{
            background-image: radial-gradient(#ffaec9,#ffaec9,#ff7f27);
        }

</style>