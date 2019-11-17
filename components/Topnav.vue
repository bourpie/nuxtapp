<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="../">
          Pierre Bourgeois
        </a>
        <span @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}" class="navbar-burger burger" aria-label="menu" aria-expanded="false">
          <span />
          <span />
          <span />
        </span>
      </div>
      <div v-bind:class="{'is-active': isOpen}" class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/">
            Accueil
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/blog">
            Blogue
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      isOpen: false
    }
  }
}
</script>
