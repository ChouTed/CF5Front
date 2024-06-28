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
    </div>
</template>

<script>
export default {
    name: 'tablesPage',

    data() {
        return{
            
        }
    },

    methods: {
        openTableStatus()   {
            // if() {
            //     this.$router.push({ name: 'tableStatus' });
            //     }
            },
        
        showTable(tableNumber) {
            this.$router.push({ name: 'tableStatus'});
            console.log(tableNumber)
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

</style>