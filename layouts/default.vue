<template>
  <v-app>
    <my-header />
    <nuxt />
  </v-app>
</template>

<script>
import myHeader from '~/components/shared/myHeader'

export default {
  components: {
    myHeader
  }
}
</script>