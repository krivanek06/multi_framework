export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  console.log('middleware/auth');
  // console.log('to', to);
  // console.log('from', from);
  // console.log('Authenticated name: ', user.value);
  // prevent unauthenticated access
  if (!user.value && to.path !== '/login') {
    console.log('login');
    return navigateTo('/login');
  } else if (user.value && to.path === '/login') {
    console.log('anime');
    return navigateTo('/anime');
  }
});
