<template>
  <Page actionBarHidden="true">
    <TabView :selectedIndex="selectedIndex">
      <TabViewItem title="Einkaufsliste">
        <ScrollView orientation="vertical">
          <StackLayout rows="0" columns="0">
            <TextField v-model="currentGrocery" @returnPress="addCurrentGrocery()" />
            <BasicList :items="groceries" @delete="removeGrocery" />
          </StackLayout>
        </ScrollView>
      </TabViewItem>
      <TabViewItem title="Sonstiges">
        <ScrollView orientation="vertical">
          <StackLayout rows="0" columns="0">
            <TextField v-model="currentMatter" @returnPress="addCurrentMatter()" />
            <BasicList :items="matters" @delete="removeMatter" />
          </StackLayout>
        </ScrollView>
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script>
import BasicList from './BasicList'

export default {
  components: {
    BasicList
  },
  data () {
    return {
      selectedIndex: 0
    }
  },
  computed: {
    groceries () {
      return this.$store.state.groceries
    },
    matters () {
      return this.$store.state.matters
    },
    currentGrocery: {
      get () {return this.$store.state.currentGrocery},
      set (value) {this.$store.commit('setCurrentGrocery', value)}
    },
    currentMatter: {
      get () {return this.$store.state.currentMatter},
      set (value) {this.$store.commit('setCurrentMatter', value)}
    }
  },
  methods: {
    removeGrocery (id) {
      this.$store.commit('removeGrocery', id)
    },
    removeMatter (id) {
      this.$store.commit('removeMatter', id)
    },
    addCurrentGrocery () {
      this.$store.dispatch('addCurrentGrocery')
      .then(() => {
        this.currenGrocery = ''
      })
    },
    addCurrentMatter () {
      this.$store.dispatch('addCurrentMatter')
      .then(() => {
        this.currentMatter = ''
      })
    }
  },
  mounted () {
    this.$store.dispatch('load')
  }
}
</script>

<style lang="css">
</style>

