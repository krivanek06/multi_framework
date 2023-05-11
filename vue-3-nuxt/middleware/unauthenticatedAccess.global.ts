export default defineNuxtRouteMiddleware(async (to, from) => {
  const authenticationStore = useAuthenticationStore();
  // console.log('middleware/auth');
  // console.log('to', to);
  // console.log('from', from);

  // prevent unauthenticated access
  if (!authenticationStore.getUser?.name && to.path !== '/login') {
    return navigateTo('/login');
  }
});
