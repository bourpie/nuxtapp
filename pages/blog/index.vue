<template>
  <section>
    <ul>
      <li v-for="(blog, index) in blogPosts" :key="index">
        <a :href="index">{{ blog.title }}</a>
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
