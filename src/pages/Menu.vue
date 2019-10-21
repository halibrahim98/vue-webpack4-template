<template>
  <ul>
    <li v-for="item in menu">
        {{ item.name }}
    </li>
  </ul>
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
