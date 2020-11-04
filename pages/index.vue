<template>
  <section class="section">
    <div v-for="(item, index) in getItems" :key="index" class="columns is-mobile">
      <item-card
        :key="index"
        :item-data="item"
      />
    </div>
    <total-card :price="getTotalPrice" />

    <NuxtLink
      to="/buy"
      exact-active-class="is-active"
      class="button button-buy"
    >
      Buy
    </NuxtLink>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ItemCard from '~/components/ItemCard'
import TotalCard from '~/components/TotalCard'

export default {
  name: 'HomePage',
  components: {
    ItemCard,
    TotalCard
  },
  computed: {
    ...mapGetters('items', ['getTotalPrice', 'getItems'])
  },
  methods: {
    ...mapActions('items', ['fetchItems'])
  },
  async created () {
    await this.fetchItems()
  }
}
</script>
