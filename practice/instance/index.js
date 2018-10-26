import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div ref="div">{{text}} {{obj.a}}</div>',
  data: {
    text: 0,
    obj: {}
  }
  // watch: {
  //   text (newText, oldText) {
  //     console.log(`${newText}:${oldText}`)
  //   }
  // }
})

app.$mount('#root')

// app.text = 'this is content1'

// let i = 0
setInterval(() => {
  // i++
  // 异步操作
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
  // app.$nextTick([callback])

  // app.$data.text += 1
  // app.$options.data.text += 1
  // app.obj.a = i
  // app.$forceUpdate()
  // app.$set(app.obj, 'a', i)
}, 1000)

console.log(app.$data)
console.log(app.$props)
console.log(app.$el)
console.log(app.$options)

// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }

console.log(app.$root === app)
// <item><div></div></item>
console.log(app.$children)
console.log(app.$slots)
console.log(app.$scopedSlots)
console.log(app.$refs)
console.log(app.$isServer)

const unWatch = app.$watch('text', (newText, oldText) => {
  console.log(`${newText} : ${oldText}`)
})

setTimeout(() => {
  unWatch()
}, 2000)

// app.$on('text', (a, b) => {
//   console.log(`test emited ${a} ${b}`)
// })

app.$once('text', (a, b) => {
  console.log(`test emited ${a} ${b}`)
})

setInterval(() => {
  app.$emit('text', 1, 2)
}, 1000)

// app.$emit('text', 1, 2)
