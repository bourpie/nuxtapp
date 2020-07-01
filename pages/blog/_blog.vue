<template>
  <section class="section">
    <article class="container">
      <h1 class="title is h1">
        {{ blogPost.title }}
      </h1>
      <div>{{ blogPost.body }}</div>
    </article>
  </section>
</template>

<script>
export default {
  async asyncData ({ params, payload }) {
    if (payload) { return { blogPost: payload } } else {
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
      }
    }
  }
}
</script>
