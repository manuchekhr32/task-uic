import auth from '../middleware/auth';

export default [
  {
    path: '/auth/login',
    name: 'login',
    beforeEnter: [auth],
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    beforeEnter: [auth],
    component: () => import('@/views/admin/index.vue'),
    children: [
      {
        path: 'sponsors',
        name: 'admin-sponsors',
        component: () => import('@/views/admin/_sponsors.vue'),
      },
      {
        path: 'dashboard',
        name: 'admin-dashboard',
        component: () => import('@/views/admin/_dashboard.vue'),
      },
      {
        path: 'students',
        name: 'admin-students',
        component: () => import('@/views/admin/_students.vue'),
      },
    ]
  },
]