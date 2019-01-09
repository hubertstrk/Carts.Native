<template>
  <WrapLayout style="margin-top: 10px;">
    <StackLayout v-for="item in sortedItems" :key="item.id">
      <Chip :text="item.name" @delete="deleteItem(item.id)"/>
    </StackLayout>
  </WrapLayout>
</template>

<script>
import _ from 'lodash'
import Chip from './Chip'

export default {
  props: {
    items: null
  },
  computed: {
    sortedItems () {
      return _.sortBy(this.items, ['name'])
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
