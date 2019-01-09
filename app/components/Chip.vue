<template>
  <StackLayout class="chip" orientation="horizontal" backgroundColor="#43b883">
    <Label class="chip-label" :text="text" />
    <Label class="chip-image fas" :text="'\uf00d'" @tap="onDelete()" />
  </StackLayout>
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
  padding: 8;
  margin: 4;
  border-radius: 10;
}

.chip-label {
  font-size: 16; 
  vertical-align: center;
  background-color: #43b883;
  width: auto;
}

.chip-image {
  font-size: 16; 
  margin-left: 5; 
  vertical-align: center;
  background-color: #43b883;
  width: auto;
}
</style>
