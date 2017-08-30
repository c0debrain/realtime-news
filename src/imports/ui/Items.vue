<template>
  <div class="items">
    <h1>{{ count }} Item(s)</h1>
    <div v-for="item of items">
      {{ item.name }}
    </div>

    <input v-model="newItem" placeholder="Add a Item" @keyup.enter="addItem" />
    <button @click="addItem">
      Add Item
    </button>

  </div>
</template>

<script>
import { use } from 'vue-supply'
import { mapGetters } from 'vuex'

export default {
  mixins: [
    use('Items'),
  ],

  data () {
    return {
      newItem: ''
    }
  },

  methods: {
    async addItem () {
      try {
        await Meteor.callPromise('items.add', {
          name: this.newItem
        })
        this.newItem = ''
      } catch (e) {
        console.error(e)
      }
    },
  },

  computed: {
    ...mapGetters({
      count: 'items/count',
    }),

    items () {
      return this.$supply.Items.items
    },
  },
}
</script>
