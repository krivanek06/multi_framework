import { User } from '~/types';

export const useAuthenticationStore = defineStore({
  id: 'authentication',
  state: () => {
    const user: User = {
      name: ''
    };

    return { user };
  },
  actions: {
    login(name: string) {
      this.user = {
        name
      };
    },
    logout() {
      this.user = {
        name: ''
      };
    }
  },
  getters: {
    getUser: (state) => {
      return state.user;
    }
  },
  persist: {
    storage: persistedState.localStorage
  }
});
