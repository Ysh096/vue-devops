import { createRouter } from "vue-router"
import App from '../App.vue'

const routes = [
  {
    path:'/app',
    name:'App',
    component:App
  },
]


const router = createRouter({
  routes
})

export default router