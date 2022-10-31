<template>
  <h3>usuario create :D </h3>
  <button @click="onCancel">{{ '<- Volver' }}</button>
</template>

<script>
export default {
  name: "usuario-create",
  methods: {
    onCancel() {
      this.$router.push({name: 'usuarioIndex'});
    }
  }
}
</script>

<style scoped>

</style>