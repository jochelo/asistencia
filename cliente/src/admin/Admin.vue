<template>
  <navbar-admin/>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import NavbarAdmin from "@/admin/layouts/NavbarAdmin";

export default {
  name: "Admin",
  components: {
    NavbarAdmin
  }
}
</script>
