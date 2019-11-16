<template>
  <div class="container">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
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
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  }
}
</script>
