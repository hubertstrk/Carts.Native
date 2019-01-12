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
import * as Toast from 'nativescript-toast';
import BasicList from './BasicList'

export default {
  components: {
    BasicList
  },
  data () {
    return {
      selectedIndex: 0,
      gripes: [
        'Das kann ja was werden...',
        'Na gut',
        'Packen wir\'s an',
        'Brauchen wir das wirklich?',
        'Unbedingt!',
        'Los geht\'s',
        'Hört sich gut an',
        'Sehr gut',
        'Weiter so',
        'Da läuft einem ja das Wasser im Mund zusammen',
        'Diese App kann mehrere tausend Einträge speichern'
      ],
      gripesAmount: [
        'Viel mehr sollt es dann aber nicht werden',
        'Ob das noch alles ins Auto passt?',
        'Vielleicht kann man sich das auch liefern lassen?',
        'Diese Online Supermärkte sollen ganz gut sein',
        'Ich bin zwar eine Maschiene, aber alles kann ich auch nicht',
        'Gut, ich hol dann mal den Anhänger',
        'Hatten die bei der Autovermietung auch Kombis?',
        'Wenn du so weiter machts kannst du das Handy als Handwärmer benutzen',
        'Overflow, overflow, devision by zero...',
        'Defcon 2, Mobilisierung der Reserver'
      ]
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
    },
    itemCount () {
      return this.selectedIndex === 0 ? this.groceries.length : this.matters.length
    }
  },
  methods: {
    selectedIndexChange (index) {
      this.selectedIndex = index.value
    },
    removeGrocery (id) {
      this.$store.dispatch('removeGrocery', id)
    },
    removeMatter (id) {
      this.$store.dispatch('removeMatter', id)
    },
    addCurrentGrocery (name) {
      this.currentGrocery = name
      return this.$store.dispatch('addCurrentGrocery')
      .then(() => {
        this.currenGrocery = ''
      })
    },
    addCurrentMatter (name) {
      this.currentMatter = name
      return this.$store.dispatch('addCurrentMatter')
      .then(() => {
        this.currentMatter = ''
      })
    },
    gripe () {
      const random = Math.floor(Math.random() * this.gripes.length)
      return this.gripes[random]
    },
    gripeAmount () {
      const random = Math.floor(Math.random() * this.gripesAmount.length)
      return this.gripesAmount[random]
    },
    currentGripe () {
      return this.itemCount > 20 ? this.gripeAmount() : this.gripe()
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
        const action = this.selectedIndex === 0 ? this.addCurrentGrocery(result.text) : this.addCurrentMatter(result.text)
        action.then(() => {
          var toast = Toast.makeText(this.currentGripe())
          toast.show()
        })
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

