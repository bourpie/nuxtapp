<template>
  <section class="container">
    <h1 class="title is-1">
      Liste
    </h1>
    <ul>
      <li v-for="(blog, index) in blogPosts" :key="index">
        <nuxt-link :to="'blog/' + blog.slug">
          {{ blog.title }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    blogPosts () {
      return this.$store.state.blogPosts
    }
  }
}
</script>
