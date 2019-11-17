<template>
  <div class="container">
    <h1>{{ title }}</h1>

    <form @submit.prevent="handleSubmit" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
      <p style="display: none">
        <label>Ne pas remplir si tu est un humain: <input name="bot-field"></label>
      </p>
      <p>
        <label>Nom: <input v-model="form.nom" type="text" name="nom"></label>
      </p>
      <p>
        <label>Courriel: <input v-model="form.courriel" type="email" name="courriel"></label>
      </p>
      <p>
        <label>Message: <textarea v-model="form.message" name="message" /></label>
      </p>
      <p>
        <button type="submit">
          Send
        </button>
      </p>
    </form>
  </div>
</template>

<script>

export default {
  data () {
    return {
      form: {
        nom: '',
        courriel: '',
        message: ''
      }
    }
  },
  methods: {

    encode (data) {
      return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&')
    },

    handleSubmit () {
      fetch('/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: this.encode({
          'form-name': 'contact',
          ...this.form
        })
      })
    }
  }
}
</script>
