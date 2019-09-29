<template>
      <b-form class="form">
      <h1>EMPLOYEE RECORDS</h1>
      <br>
      <table border="1" align="center" width="80%" cellspacing="0">
          <tr>
            <th>ID.</th>
            <th>Thai Name</th>
            <th>Eng Name</th>
            <th>ID.card</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Email</th>
            <th>Facebook</th>
            <th>DELETE</th>
          </tr>
          <tr v-for="(employee) in employees" :key="employee.id">
            <td>{{employee.id}}</td>
            <td>{{employee.thName}}</td>
            <td>{{employee.enName}}</td>
            <td>{{employee.idcard}}</td>
            <td>{{employee.phone}}</td>
            <td>{{employee.address}}</td>
            <td>{{employee.email}}</td>
            <td>{{employee.facebook}}</td>
            <th><b-button @click="Delete(employee.id)" variant="danger">DELETE</b-button></th>
          </tr>
      </table>
      <br><br>
      <center>
      <b-button @click="Refresh()" variant="warning">Refresh</b-button>
      </center>
      </b-form>
</template>
<script>
import api from "../api";
export default {
    data() {
    return {
      employees: []
    };
  },
  methods: {
    getallmember() {
      api.getallmember().then(result => {
        console.log(result);
        this.employees = result;
      });
    },

    Delete(id){
      api.deletemember(id)  
        console.log(id);
        alert("Delete Complete!!");
    },
    Refresh(){
      window.location.reload();
    }
  },
  mounted() {
    this.getallmember();
  }
}
</script>
<style>
h1 {
  text-align: center;
}

.form{
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  background-color: #282c34;
  color: white;
  padding: 40px;
  font-family: Courier;
}

</style>