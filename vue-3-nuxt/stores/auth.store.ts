import { User } from '~/types';

export const useAuthenticationStore = defineStore({
  id: 'authentication',
  state: () => {
    const user = useLocalStorage<User | null>('authenticationUser', {} as User);

    return {
      user
    };
  },
  actions: {
    login(name: string) {
      this.user = {
        name
      };
    },
    logout() {
      this.user = null;
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
