<template>
  <GridLayout class="chip" columns="auto, 20" rows="auto" backgroundColor="#53ba82">
    <Label row="0" col="0" :text="text" verticalAlignment="center" backgroundColor="#53ba82"/>
    <Label row="0" col="1" class="fas" horizontalAlignment="right" verticalAlignment="center" backgroundColor="#53ba82" :text="'\uf00d'" @tap="onDelete()" />
  </GridLayout>
</template>

<script>
export default {
  props: {
    text: String
  },
  methods: {
    onDelete () {
      this.$emit('delete')
    }
  }
}
</script>

<style lang="css" scoped>
.chip {
  padding: 8px;
  margin: 4px;
  border-radius: 8px;
}

.far {
  font-family: Font Awesome 5 Brands, fa-regular-400;
  color: #3f3f3f;
}
.fas {
  font-family: Font Awesome 5 Brands, fa-solid-900;
  color: #3f3f3f;
}
.fab {
  font-family: Font Awesome 5 Brands, fa-brands-400;
  color: #3f3f3f;
}
</style>
