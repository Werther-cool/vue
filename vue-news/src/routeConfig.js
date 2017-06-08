  
import Home from './components/home.vue'
import Follow from './components/follow.vue'
import Column from './components/column.vue'


export default[
  {
    path:'/home',
    components:Home
  },
  {
    path:'/follow',
    components:Follow
  },
  {
    path:'/column',
    components:Column
  },
   { path: '/', redirect: '/home'},

]
