<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          Pierre Bourgeois
        </nuxt-link>
      </div>

      <div class="navbar-end">
        <nuxt-link class="navbar-item" to="/">
          Accueil
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/blog">
          Blogue
        </nuxt-link>
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
  },
  watch: {
    $route () {
      this.isOpen = false
    }
  }
}
</script>
