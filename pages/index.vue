<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <mdb-btn color="primary">
      MDB Button
    </mdb-btn>
  </div>
</template>

<script>

import { mdbBtn } from 'mdbvue'

export default {
  components: {
    mdbBtn
  }
}
</script>
