import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boards: [
      {
        id: 'board-1',
        cards: [
          { id: 'card-1', name: 'Card 1', description: 'Description 1' },
          { id: 'card-2', name: 'Card 2', description: 'Description 2' }
        ]
      },
      {
        id: 'board-2',
        cards: []
      },
      {
        id: 'board-3',
        cards: []
      },
      {
        id: 'board-4',
        cards: []
      }
    ],
    target: null,
    count: 2
  },
  mutations: {
    setCard (state, card) {
      state.boards.forEach(e => {
        if (e.id === card.board) {
          delete card.board
          e.cards.push(card)
        }
      })
    },
    getCard (state, cardId) {
      state.boards.forEach(o => {
        if (state.target === null || state.target === undefined) {
          state.target = o.cards.find(s => s.id === cardId)
        }
      })
    },
    deleteCard (state, cardId) {
      state.boards.forEach(o => {
        o.cards = o.cards.filter(s => s.id !== cardId)
      })
    },
    setCount (state) {
      state.count += 1
    },
    clearTarget (state) {
      state.target = null
    }
  },
  actions: {
  },
  getters: {
    boards: s => s.boards,
    target: s => s.target,
    count: s => s.count
  }
})
