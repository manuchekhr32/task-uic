<template>
  <div class="min-h-screen middle p-2">
    <div class="w-full max-w-sm">
      <div class="middle w-full mb-12">
        <img src="@/assets/logo/logo__club.svg" alt="404">
      </div>

      <div class="bg-white p-8 rounded-xl shadow-my-sm">
        <form @submit.prevent="login">
          <h1 class="font-bold text-2xl text-dark-blue">Kirish</h1>

          <div class="form-field mt-11">
            <label class="form-field__label" for="username">Login</label>
            <input 
              id="username" 
              v-model="username" 
              class="form-field__input" 
              type="text"
              required 
              placeholder="adm8904" 
            />
          </div>

          <div class="form-field mt-[22px] mb-[22px]">
            <label class="form-field__label" for="password">Parol</label>
            <input 
              id="password" 
              v-model="password" 
              class="form-field__input" 
              type="password"
              required 
            />
          </div>

          <div class="w-full">
            <VueRecaptcha
              class="!scale-[calc(320_/_304)] !origin-[0_0]"
              sitekey="6LdXqRgiAAAAAF9M1flol5Blu0LhIGG4S4W5Tx6z"  
              :load-recaptcha-script="true"
              @verify="recapSuccess"
              @error="recapError"
            />
          </div>

          <button
            :disabled="loggingIn"
            class="bg-primary rounded-md mt-[22px] w-full py-[14px] text-white text-15p font-medium"
          >
            <span v-if="loggingIn">
              <i class="fad fa-spinner-third animate-spin"></i>
            </span>
            <span v-else>
              Kirish
            </span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted, reactive, ref } from "@vue/runtime-core";
import { AxiosError, AxiosInstance } from "axios";
import { VueRecaptcha } from 'vue-recaptcha';
const $axios: AxiosInstance = inject('$axios')!;

const username = ref('username');
const password = ref('password');
const loggingIn = ref(false);

const login = async () => {
  if (!recapVerified.value) {return alert("Recaptcha is not verified!")};
  loggingIn.value = true;
  try {
    const res = await $axios.post('/auth/login', { username, password });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
  loggingIn.value = false;
}

const recapVerified = ref(false);
const recapSuccess = (response: string) => {
  recapVerified.value = true;
  console.log(response);
}

const recapError = () => {
  recapVerified.value = false;
  console.log("error");
}

</script>