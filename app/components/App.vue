<template>
  <Page>

    <ActionBar title="My App">
    </ActionBar>

    <TabView :selectedIndex="selectedIndex">
      <TabViewItem title="Einkaufsliste">
        <Label text="&#xf09b;" style="font-family: Font Awesome 5 Brands, fa-brands-400;"></Label>
        <!-- <BasicList :items="groceries"></BasicList> -->
      </TabViewItem>
      <TabViewItem title="Sonstiges">
         <Label class="far" :text="'\uf00d'" style="font-size: 50px;"></Label>
         
        <!-- <BasicList :items="matters"></BasicList> -->
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script>

// import BasicList from './BasicList'
export default {
  components: {
    // BasicList
  },
  data () {
    return {
      selectedIndex: 0
    }
  },
  computed: {
    // groceries () {
    //   return this.$store.state.groceries
    // },
    // matters () {
    //   return this.$store.state.matters
    // }
  },
  mounted () {
    // this.$store.dispatch('load')
  }
}
</script>

<style lang="css">
.far {
  font-family: Font Awesome 5 Brands, fa-solid-900;
  color: blue;
}
</style>

