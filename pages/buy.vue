<template>
  <section class="section">
    <p class="total-price">
      {{ getTotalPrice }}
    </p>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Buy',
  computed: {
    ...mapGetters('items', ['getTotalPrice'])
  }
}
</script>

<style lang="scss" scoped>

</style>
