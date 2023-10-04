<script setup lang="ts">
defineOptions({
  name: 'LoginPage',
})
const user = useUserStore()
const { t } = useI18n()
</script>

<template>
  <div>
    <h3 class="font-bold mb-14 mt-32">
      {{ t('login.title') }}
    </h3>
    <form @submit.prevent="user.login">
      <div class="mb-14">
        <TheInput
          v-model="user.email"
          name="email"
          :label="t('login.email')"
          :placeholder="t('login.email_placeholder')"
          :required="true"
          autocomplete="false"
          :error="user.errors.email"
        />
      </div>
      <TheInput
        v-model="user.password"
        name="password"
        :label="t('login.password')"
        :password="true"
        :placeholder="t('login.password_placeholder')"
        :required="true"
        autocomplete="false"
        :error="user.errors.password"
      />
      <div class="my-8 flex flex-row justify-between items-center">
        <TheCheckBox
          v-model="user.remember"
          :label="t('login.keep_me_logged_in')"
          color="white"
          filled-color="primary"
        />
        <RouterLink to="/forgot-password" class="text-blue-500 underline underline-offset-4 cursor-pointer">
          {{ t('login.forgot_password') }}
        </RouterLink>
      </div>
      <TheButton
        name="submit"
        class="h-12 w-full text-sm text-white bg-primary hover:bg-primary-800"
      >
        {{ t('login.login') }}
      </TheButton>
      <div class="flex flex-row justify-center mt-8">
        <span>{{ t('login.new') }}</span> &nbsp;
        <RouterLink to="/register" class="text-blue-500 underline underline-offset-4 cursor-pointer">
          {{ t('login.register') }}
        </RouterLink>
      </div>
    </form>

    <!--
    Login With SSO
  -->
    <div class="relative flex py-5 items-center">
      <div class="flex-grow border-t border-gray-400" />
      <span class="flex-shrink mx-4 text-gray-400">OR</span>
      <div class="flex-grow border-t border-gray-400" />
    </div>
    <div class="flex flex-row gap-4 justify-between">
      <TheButton
        class="px-4 py-2 border flex gap-1 items-center border-slate-200 rounded-lg text-slate-700 dark:text-slate-300"
      >
        <img class="w-4 h-4" src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google logo">
        <span>Login with Google</span>
      </TheButton>
      <TheButton
        class="px-4 py-2 border flex gap-1 items-center border-slate-200 rounded-lg text-slate-700 dark:text-slate-300"
      >
        <img class="w-4 h-4" src="https://www.svgrepo.com/show/448239/microsoft.svg" alt="google logo">
        <span>Login with Microsoft</span>
      </TheButton>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: unauthorized
  guest: true
</route>
