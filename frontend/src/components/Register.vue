<template>
  <div>
    <b-form class="form" @submit="onSubmit" @reset="onReset">
      <h1>PERSONAL INFORMATION</h1>
      <b-form-group id="input-group-1" label="Thai Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="thName"
          required
          placeholder="Enter Thai Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="English Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="enName"
          required
          placeholder="Enter English Name"
        ></b-form-input>
      </b-form-group>
      
      <center>
      <br>
      <b-button @click="socialFacecbookLogin" variant="primary">Sign in with Facebook</b-button>
      <br><br>
        <span>
          <h1>FaceBook: {{profiledata.fullname}}</h1>
          <h1>Email: {{profiledata.email}}</h1>
          <br><br>
          <img class="profile" :src=profiledata.profile_image >
        </span>
      <br><br>
      </center>
      
      <b-form-group id="input-group-3" label="ID card:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="idcard"
          required
          placeholder="Enter ID card"
        ></b-form-input>
      </b-form-group>

      
      <b-form-group id="input-group-4" label="Phone:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="phone"
          required
          placeholder="Enter Phone"
        ></b-form-input>
      </b-form-group>

      
      <b-form-group id="input-group-5" label="Address:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="address"
          required
          placeholder="Enter Address"
        ></b-form-input>
      </b-form-group>
      <center>
      <b-button type="submit" variant="primary" @click="$router.push('register')">Confirm</b-button>
      <br><br>
      <b-button type="reset" variant="danger">Reset</b-button>
      <br><br>
      <b-button @click="$router.push('result')" variant="success">Result</b-button>
      </center>
    </b-form>
  </div>
</template>

<script>
import  firebase from "firebase";
import api from "../api";
  export default {
    data() {
      return {
        profiledata: {},
        thName: "",
        enName: "",
        idcard: "",
        facebook: "",
        email: "",
        address: "",
        phone: "",
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.facebook = this.profiledata.fullname,
        this.email = this.profiledata.email,
          api.postMember(
          this.thName,
          this.enName,
          parseInt(this.idcard),
          this.facebook,
          this.email,
          this.address,
          this.phone
        );
        alert("Post Complete!!");
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.thName = ''
        this.enName = ''
        this.idcard = ''
        this.phone = ''
        this.address = ''
      },
      socialFacecbookLogin: function() {
      const provide = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provide).then(result => {
          // create user in db
          this.profiledata = {
            facebook_id: result.additionalUserInfo.profile.id,
            fullname: result.additionalUserInfo.profile.name,
            email: result.additionalUserInfo.profile.email,
            profile_image: result.user.photoURL + "?height=500",
          };
          console.log(this.profiledata);
        })
        .catch(err => {
          alert("Oops. " + err.message);
        });
      }
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