<template>
  <div class="column">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title has-text-danger">
          {{ itemData.title }}
        </p>
      </header>
      <footer class="card-footer" :class="footerClass" @click="toggleBuyed($vnode.key)">
        <p class="card-footer-item is-justify-content-flex-end has-text-weight-bold">
          {{ `$${itemData.price}` }}
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    itemData: {
      type: Object,
      required: true
    }
  },
  computed: {
    footerClass () {
      return this.itemData.buyed ? 'card-footer--buyed' : 'card-footer--not-buyed'
    }
  },
  methods: {
    ...mapActions('items', ['toggleBuyed'])
    // toggleBuyed () {
    //   // this.itemData.buyed = !this.itemData.buyed
    //   this.toggleBuyed(this.$vnode.key)
    // }
  }
}
</script>

<style lang="scss" scoped>
.card-footer {
  cursor: pointer;
}
.card-footer--buyed {
  background-color: greenyellow;
}
.card-footer--not-buyed {
  background-color: orangered;
}
.is-justify-content-flex-end {
  justify-content: flex-end;
}
</style>
