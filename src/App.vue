<template>
  <div class="container center-content">
    <b-container class="bv-example-row">
      <b-row>
        <b-col
          cols="12"
          offset="0"
        >
          <div>
            <b-navbar
              toggleable="lg"
              type="dark"
              variant="info">
              <b-navbar-brand href="#">The Lamb Sauce</b-navbar-brand>

              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-link to="/"
                    router-tag="b-nav-item">Home</b-link>
                    <b-link to="/About"
                    router-tag="b-nav-item">About</b-link>
                    <b-link to="/Contact"
                    router-tag="b-nav-item">Contact</b-link>
                    <b-link to="/Menu"
                    router-tag="b-nav-item">Menu</b-link>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <RouterView />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="stylus" scoped>

.container
  font-family 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  max-width 1200px

</style>
