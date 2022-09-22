import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useMainStore = defineStore('main', () => {
  const access_token = ref(localStorage.getItem('access_token'));
  const refresh_token = ref(localStorage.getItem('refresh_token'));

  const getTokens = computed(() => {
    return { 
      access_token: access_token.value, 
      refresh_token: refresh_token.value 
    }
  })

  const setTokens = (tokens: AuthTokens) => {
    access_token.value = tokens.access_token;
    refresh_token.value = tokens.refresh_token;
  }

  return {
    getTokens, setTokens,
  }
})
