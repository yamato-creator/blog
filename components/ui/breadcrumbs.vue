<template>
  <v-breadcrumbs :items="breadcrumbs">
    <template #item="props">
      <v-breadcrumbs-item
        :to="props.item.to"
        active-class=""
        exact-active-class="v-breadcrumbs__item--disabled"
      >
        <v-icon
          v-if="props.item.icon"
          :color="iconColor(props.item)"
        >
          {{ props.item.icon }}
        </v-icon>
        <span class="ml-1">
          {{ props.item.text }}
        </span>
      </v-breadcrumbs-item>
    </template>
    <template #divider>
      <v-icon>mdi-chevron-right</v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  props: {
    addItems: {
      type: Array,
      default() { return [] }
    }
  },
  data: () => ({
    items: [
      { icon: 'mdi-home', text: 'ホーム', to: '/' }
    ]
  }),
  computed: {
    breadcrumbs() {
      return this.items.concat(this.addItems)
    },
    iconColor() {
      return (item) => {
        return item.iconColor || 'primary'
      }
    }
  }
}
</script>