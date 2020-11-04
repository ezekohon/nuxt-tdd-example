<template>
  <div class="column">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title has-text-danger">
          Total
        </p>
      </header>
      <footer class="card-footer">
        <p class="card-footer-item has-text-weight-bold">
          {{ `$${price}` }}
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    price: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
