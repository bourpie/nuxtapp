<template>
  <div>
    <Navbar />
    <transition
      name="slide"
      mode="out-in"
    >
      <nuxt />
    </transition>
  </div>
</template>

<script>

export default {
  components: {
    Navbar: () => import('@/components/Topnav')
  },
  data () {
    return {
      title: 'Pierrre Bourgeois - développeur Web à Montréal',
      description: 'Un site expérimental de type Jamstack développé avec Nuxt.js, Vue.js et Netlify',
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/animations';
@import '@/assets/main';
</style>
