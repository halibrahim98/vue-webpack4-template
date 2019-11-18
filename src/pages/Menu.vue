<template>
  <div>
    <b-card
      title="Napoleon the shorty"
      img-src="https://www.biography.com/.image/t_share/MTIwNjA4NjMzMjIxNzExMzcy/napoleon-i-9420291-2-402.jpg"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        Napoleon isn't as short as you think he is.
      </b-card-text>

      <b-button
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        variant="primary"
      >
        Find out
      </b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      menu: []
    }
  },
  created: function () {
    fetch('https://api.myjson.com/bins/cqmxf')
      .then(response => response.json())
      .then(json => {
        this.menu = json.items
      })
  }
}

</script>
