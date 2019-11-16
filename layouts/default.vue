<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script>

import Navbar from '@/components/Topnav'

export default {
  components: {
    Navbar
  },
  data () {
    return {
      title: 'Bienvenu chez moi',
      description: 'Un site Nuxt en construction'
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
  $bleu: #095797 !important;
  .bg-primary,
  .btn-primary {
    background-color: $bleu;
  }
  .btn {
    border-radius: 30px;
  }
</style>
