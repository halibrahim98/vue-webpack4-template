<template>
  <div class="full-width">
    <h1> Welcome to the Useless Archive!</h1>
    <div class="full-width center-content">
      <h1> Welcome <span v-if="user"> {{ user.name }} </span> !</h1>
    </div>
    <img src="https://m.media-amazon.com/images/M/MV5BYjcxOGIyNTktZTNlOS00ODk1LTkwZDMtNjM0Mjk1YmE2MTliXkEyXkFqcGdeQXVyMjY0MzgwMTc@._V1_UY268_CR212,0,182,268_AL_.jpg">
    <p> In this Site, all the info is useless. So don't bother researching it. </p>

    <div>
      <b-card
        title="Random Fact of the Day"
        img-src="https://www.lgssales.com/wp-content/uploads/2017/07/darling-oranges-1.png"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Oranges have a mysterious secret behind their appearance and name.
        </b-card-text>

        <b-button
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="primary"
        >
          Find out
        </b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      user: undefined
    }
  },
  created: function () {
    fetch('https://api.myjson.com/bins/ynkoi')
      .then(response => response.json())
      .then(json => {
        this.users = json.users
      })
  },
  mounted: function () {
    let v = sessionStorage.user
    if (v !== undefined) {
      console.log(v)
      this.user = JSON.parse(v)
    }
  }
}
</script>
