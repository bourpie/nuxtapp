<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns is-8 is-variable ">
          <div class="column is-two-thirds has-text-left">
            <h1 class="title is-1">
              Contactez-moi
            </h1>
            <p class="is-size-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi soluta
              voluptate facere molestiae consequatur.
            </p>
            <div class="social-media">
              <a href="https://facebook.com" rel="noopener" target="_blank" class="button is-light is-large"><font-awesome-icon :icon="['fab', 'facebook']" aria-hidden="true" /> <span class="sr-only">Facebook</span></a>
              <a href="https://instagram.com" rel="noopener" target="_blank" class="button is-light is-large"><font-awesome-icon :icon="['fab', 'instagram']" aria-hidden="true" /><span class="sr-only">Instagram</span></a>
              <a href="https://twitter.com" rel="noopener" target="_blank" class="button is-light is-large"><font-awesome-icon :icon="['fab', 'twitter']" aria-hidden="true" /><span class="sr-only">Twitter</span></a>
            </div>
          </div>
          <form
            @submit.prevent="handleSubmit"
            class="column is-one-third has-text-left"
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <label hidden>Laisse ce champ vide si tu es un humain: <input name="bot-field"></label>
            <div class="field">
              <label for="nom" class="label">Nom</label>
              <div class="control">
                <input id="nom" v-model="form.nom" class="input is-medium" type="text" name="nom">
              </div>
            </div>
            <div class="field">
              <label for="courriel" class="label">Courriel</label>
              <div class="control">
                <input id="courriel" v-model="form.courriel" class="input is-medium" type="email" name="courriel">
              </div>
            </div>
            <div class="field">
              <label for="message" class="label">Message</label>
              <div class="control">
                <textarea id="message" v-model="form.message" class="textarea is-medium" name="message" />
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-link is-fullwidth has-text-weight-medium is-medium">
                Envoyer le message
              </button>
            </div>
          </form>

          <!-- Fin formulaire -->
        </div>
      </div>
    </div>
  </section>
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
