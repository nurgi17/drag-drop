<template>
    <div class="form">
        <div class="form-text">
            <input type="text" v-model="name" placeholder="Название">
            <textarea v-model="text" placeholder="Описание"></textarea>
        </div>
        <div class="mini">
            <button @click="create" class="btn">Добавить</button>
            <router-link tag="button" to="/" class="btn">Отмена</router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Create',
  data: () => ({
    name: '',
    text: ''
  }),
  methods: {
    create () {
      if (this.name !== '' || this.text !== '') {
        const card = {
          id: `card-${this.count + 1}`,
          name: this.name,
          description: this.text,
          board: 'board-1'
        }
        this.$store.commit('setCount')
        this.$store.commit('setCard', card)
        this.$router.push('/')
      } else {
        alert('Все поля должны быть заполнены')
      }
    }
  },
  computed: {
    count () {
      return this.$store.getters.count
    }
  }
}
</script>
<style lang="scss" scoped>
.form {
    padding: 10px;
    input, textarea {
        padding: 15px;
        width: 30%;
        margin-bottom: 10px;
    }
    .form-text {
        display: flex;
        flex-direction: column;
    }
    .mini {
        button {
            margin-right: 5px;
        }
    }
}
</style>
