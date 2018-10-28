import Vue from 'vue'

new Vue({
  el: '#root',
  template: `<div>
    <p>Name:{{name}}</p>
    <p>Name:{{getName()}}</p>
    <p>Number:{{number}}</p>
    <p><input type="text" v-model="number"></p>
    <p>FirstName: <input type="text" v-model="firstName"></p>
    <p>LastName: <input type="text" v-model="lastName"></p>
  </div>`,
  data: {
    firstName: 'Jokcy',
    lastName: 'Lou',
    number: 0
  },
  computed: {
    name () {
      console.log('new name')
      return `${this.firstName} ${this.lastName}`
    }
  },
  methods: {
    getName () {
      console.log('getName invoked')
      return `${this.firstName} ${this.lastName}`
    }
  }
})
