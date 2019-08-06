<template>
  <div>
    <b-form class="form" @submit="onSubmit" @reset="onReset" v-if="show">
      <h1>PERSONAL INFORMATION</h1>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>
      <br>
      <b-button @click="socialFacecbookLogin" variant="primary">Facebook</b-button>
      <br><br>
        <span>
          <h1>FaceBook: {{profiledata.fullname}}</h1>
          <h1>Email: {{profiledata.email}}</h1>
          <br><br>
          <img class="profile" :src=profiledata.profile_image>
        </span>
      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
    <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import  firebase from "firebase";
  export default {
    data() {
      return {
        profiledataearth: {},
        profiledata: {},
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
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

.profile {
    margin-left: 31.5%;
    max-width: 500px;
    max-height: 500px;
}
</style>