<template>
    <div
      :id="id"
      class="board"
      @dragover.prevent
      @drop.prevent="drop">
        <slot/>
    </div>
</template>
<script>
export default {
  name: 'Board',
  props: ['id'],
  methods: {
    drop (e) {
      const cardId = e.dataTransfer.getData('card_id')
      const card = document.getElementById(cardId)
      card.style.display = 'block'
      this.$store.commit('getCard', cardId)
      this.$store.commit('deleteCard', cardId)
      e.target.appendChild(card)
      this.target.board = e.target.id
      this.$store.commit('setCard', this.target)
      this.$store.commit('clearTarget')
    }
  },
  computed: {
    target () {
      return this.$store.getters.target
    }
  }
}
</script>
