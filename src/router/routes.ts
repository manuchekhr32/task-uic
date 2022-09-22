import auth from '../middleware/auth';
import Login from '@/views/Login.vue'
import Admin from '@/views/admin/index.vue'
import Sponsors from '@/views/admin/_sponsors.vue'
import Dashboard from '@/views/admin/_dashboard.vue'
import Students from '@/views/admin/_students.vue'

export default [
  {
    path: '/auth/login',
    name: 'login',
    beforeEnter: [auth],
    component: Login,
  },
  {
    path: '/admin',
    name: 'admin',
    beforeEnter: [auth],
    component: Admin,
    children: [
      {
        path: 'sponsors',
        name: 'admin-sponsors',
        component: Sponsors,
      },
      {
        path: 'dashboard',
        name: 'admin-dashboard',
        component: Dashboard,
      },
      {
        path: 'students',
        name: 'admin-students',
        component: Students,
      },
    ]
  },
]