export default defineNuxtRouteMiddleware((to, from) => {
  //   console.log('middleware/auth');
  //   console.log('to', to);
  //   console.log('from', from);

  const authenticationStore = useAuthenticationStore();

  // prevent unauthenticated access
  if (!authenticationStore.getUser?.name && to.path !== '/login') {
    return navigateTo('/login');
  }
});
