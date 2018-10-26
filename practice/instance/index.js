import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div>{{text}}</div>',
  data: {
    text: 0
  }
})

app.$mount('#root')

// app.text = 'this is content1'

setInterval(() => {
  app.text += 1
}, 1000)

console.log(app.$data)
console.log(app.$props)
console.log(app.$el)
console.log(app.$options)
