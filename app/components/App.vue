<template>
  <!-- <Page actionBarHidden="true"> -->
  <Page class="page">
    <ActionBar title="Carts">
      <ActionItem @tap="onNewItem" 
        text="Neuer Eintrag" />
    </ActionBar>
    <TabView :selectedIndex="selectedIndex" @selectedIndexChange="selectedIndexChange">
      <TabViewItem title="Einkaufsliste">
        <ScrollView orientation="vertical">
          <BasicList :items="groceries" @delete="removeGrocery" />
        </ScrollView>
      </TabViewItem>
      <TabViewItem title="Sonstiges">
        <ScrollView orientation="vertical">
          <BasicList :items="matters" @delete="removeMatter" />
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
      get () {return this.$store.state.currentMatter.sort()},
      set (value) {this.$store.commit('setCurrentMatter', value)}
    }
  },
  methods: {
    selectedIndexChange (index) {
      this.selectedIndex = index.value
    },
    removeGrocery (id) {
      this.$store.commit('removeGrocery', id)
    },
    removeMatter (id) {
      this.$store.commit('removeMatter', id)
    },
    addCurrentGrocery (name) {
      this.currentGrocery = name
      this.$store.dispatch('addCurrentGrocery')
      .then(() => {
        this.currenGrocery = ''
      })
    },
    addCurrentMatter (name) {
      this.currentMatter = name
      this.$store.dispatch('addCurrentMatter')
      .then(() => {
        this.currentMatter = ''
      })
    },
    onNewItem () {
      prompt({
        title: 'Was muss denn noch gemacht werden?',
        message: '',
        okButtonText: "Los geht's",
        cancelButtonText: 'Lieber doch nicht',
        defaultText: '',
      }).then(result => {
        if (!result.result) return
        return this.selectedIndex === 0 ? this.addCurrentGrocery(result.text) : this.addCurrentMatter(result.text)
      });
    }
  },
  mounted () {
    this.$store.dispatch('load')
  }
}
</script>

<style lang="css">
</style>

