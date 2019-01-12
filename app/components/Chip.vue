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
  padding: 6;
  margin: 4;
  border-radius: 10;
}

.chip-label {
  font-size: 14; 
  vertical-align: center;
  background-color: #43b883;
  width: auto;
}

.chip-image {
  font-size: 14; 
  margin-left: 5;
  margin-right: 3;
  vertical-align: center;
  background-color: #43b883;
  width: auto;
}
</style>
