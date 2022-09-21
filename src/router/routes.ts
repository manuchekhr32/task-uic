export default [
  {
    path: '/auth/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/admin/sponsors',
    name: 'admin-sponsors',
    component: () => import('@/views/admin/Sponsors.vue'),
  },
]