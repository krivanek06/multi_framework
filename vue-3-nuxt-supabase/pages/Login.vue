<template>
  <main class="w-full max-w-[640px] h-[100vh] mx-auto grid place-content-center px-3 sm:px-6">
    <form class="w-[400px]">
      <h3 class="text-center">Login Credentials</h3>
      <input
        v-model="userData.email"
        required
        minlength="3"
        autocomplete="off"
        type="text"
        name="email"
        placeholder="Enter email"
        class="text-gray-600"
      />
      <input
        v-model="userData.password"
        required
        minlength="3"
        autocomplete="off"
        type="password"
        name="username"
        placeholder="Enter password"
        class="text-gray-600"
      />
      <button type="button" class="action-button" @click="onSignIn">Login</button>
      <button type="button" class="action-button" @click="onSignUp">Register</button>
    </form>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Login',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Login to the application'
    }
  ]
});

// definePageMeta({
//   middleware: ['unauthenticated-access']
// });

const client = useSupabaseClient();
const userData = ref({
  email: '',
  password: ''
});

const onSignIn = async () => {
  const { data, error } = await client.auth.signInWithPassword({
    email: userData.value.email,
    password: userData.value.password
  });
  console.log(data.user, error);
};

const onSignUp = async () => {
  const { data, error } = await client.auth.signUp({
    email: userData.value.email,
    password: userData.value.password
  });
  console.log(data.user, error);
};
</script>

<style scoped></style>
