<template>
  <div>
    <Navbar />
    <nuxt />
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

a.navbar-item.is-active {

  background: #000000;
}

a.navbar-item.is-active.nuxt-link-active {
  background: #000000;
  color: white;
}

a.navbar-item.is-active:not(:focus):not(:hover), .navbar-link.is-active:not(:focus):not(:hover) {
    background-color: #000000;
}

  $bleu: #095797 !important;
  .bg-primary,
  .btn-primary {
    background-color: $bleu;
  }
  .btn {
    border-radius: 30px;
  }

  .page-enter-active {
    animation: acrossIn .15s ease-out both;
  }

  .page-leave-active {
    animation: acrossOut .25s ease-in both;
  }

  @keyframes acrossIn {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes acrossOut {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(100%, 0, 0);
    }
  }

</style>
