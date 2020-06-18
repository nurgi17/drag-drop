<template>
  <div>
    <div class="but">
      <router-link tag="button" to="/create" class="btn">Создать карточку</router-link>
      <div>
        <input type="checkbox" id="switch" name="switch" v-model="drag">
        <label for="switch">Turn off the drag and drop</label><br>
      </div>
    </div>
    <div class="box">
      <Board v-for="b in getBoards" :key="b.id" :id="b.id">
        <Card v-for="c in b.cards" :key="c.id" :id="c.id" :draggable="drag" @click.native="openModal(c.name, c.description)">
          <p>{{ c.name }}</p>
        </Card>
      </Board>
    </div>
    <Modal v-if="open" :name="name" :text="text" @close="closeModal"/>
  </div>
</template>

<script>
import Board from '@/components/Board.vue'
import Card from '@/components/Card.vue'
import Modal from '@/components/Modal.vue'
export default {
  name: 'Home',
  components: {
    Board, Card, Modal
  },
  data: () => ({
    drag: true,
    open: false,
    name: '',
    text: ''
  }),
  computed: {
    getBoards () {
      return this.$store.getters.boards
    }
  },
  methods: {
    openModal (n, t) {
      this.name = n
      this.text = t
      this.open = true
    },
    closeModal () {
      this.open = false
    }
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.but {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}
.btn {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #333333;
  background-color: #333333;
  color: #ffffff;
}
.box {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  padding: 10px;
  .board {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 340px;
    background-color: #333333;
    padding: 15px;
    .card {
      padding: 15px 25px;
      background-color: #ffffff;
      cursor: pointer;
      margin-bottom: 15px;
    }
  }
}
</style>
<style scoped>

</style>
