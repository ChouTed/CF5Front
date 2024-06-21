<template>
    <div class="tableStatusPage">
        <div class="tableStatus">
            
            <!-- <label for="quantity">Customers</label> -->
            
            <button @click="''">{{orderStatusButton}}</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        customersNumber: 0,
         orderStatusButton: 'Order',
      };
    },
    methods: {
    toggleOrderStatus() {
      // Logic to toggle or update orderStatusButton
      this.orderStatusButton = 'New Status';
    }
  }
  };
</script>

<style>
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

    /* .tableStatus>input{
        font-family: inherit;
        font-size: 2rem;
        width: 280px;
        display:flex ;
    padding: 10px 20px 10px 20px;
    border-radius: 20px;
    border-style:none;
    } */

    .tableStatus>button{
        align-self: end;
        font-family: inherit;
        font-size: 2rem;
        margin-top: 15px;
        padding: 20px 40px 20px 40px;
        border-radius: 40px;
        border-style:none;
        background-image: radial-gradient(#ffaec9,#ff7f27);
    }
    
    .tableStatus>button:hover{
        background-image: radial-gradient(#ffaec9,#ffaec9,#ff7f27);
    }

</style>
