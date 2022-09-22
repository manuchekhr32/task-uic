import { useMainStore } from "../store";

export default (to: any, from: any) => {
  const { isAuthenticated } = useMainStore();
  if (!isAuthenticated && to.name !== 'login') return { name: 'login' }
  if (isAuthenticated && to.name === 'login') return { name: 'admin-sponsors' }
  return isAuthenticated || to.name === 'login';
}