<template>
  <WrapLayout style="margin-top: 10px;">
    <StackLayout v-for="item in items" :key="item.id">
      <Chip :text="item.name" @delete="deleteItem(item.id)"/>
    </StackLayout>
  </WrapLayout>
</template>

<script>

import Chip from './Chip'

export default {
  props: {
    items: null
  },
  data () {
    return {
      textFieldValue: ''
    }
  },
  methods: {
    deleteItem (id) {
      this.$emit('delete', id)
    }
  },
  components: {
    Chip
  }
}
</script>

<style lang="css">
</style>
