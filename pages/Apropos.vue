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
              Cette application Web est un carré de sable pour expérimenter avec le concept <a href="https://jamstack.org/" rel="noopener" target="_blank">Jamstack</a>.
              Il est construit avec le framework <a href="https://jamstack.org/" rel="noopener" target="_blank">Nuxt.js</a> et
              <a href="https://www.netlify.com/" rel="noopener" target="_blank">Netlify</a> qui propose un service de déploiement continu à partir de Git.
            </p>
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
