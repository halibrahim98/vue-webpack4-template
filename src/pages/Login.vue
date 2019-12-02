<template>
  <div class="full-width center-content">
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-email"
        label="Email:"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          v-model="form.email"
          required
          placeholder="Your email address"
        />
      </b-form-group>
      <b-form-group
        id="input-group-password"
        label="Password:"
        label-for="input-password"
      >
        <b-input
          id="input-password"
          v-model="form.password"
          type="password"
          required
          placeholder="Your password"
        />
      </b-form-group>
      <b-button
        type="submit"
        variant="primary"
      >
        Log in
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      form: {
        email: '',
        password: ''
      },
      users: []
    }
  },
  methods: {
    onSubmit () {
      fetch('https://api.myjson.com/bins/ynkoi')
        .then(response => response.json())
        .then(json => {
          this.users = json.users
        })
        .then(() => {
          let email = this.form.email
          let password = this.form.password
          sessionStorage.user = JSON.stringify(this.users.find(function (user) {
            return ((user.email === email) && (user.password === password))
          }))
          console.log(sessionStorage.user)
          this.$router.push('/')
        })
    }
  }
}
</script>
