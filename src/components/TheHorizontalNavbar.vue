<script setup lang="ts">
const props = defineProps({
  isShowLogo: Boolean,
  isShowMenu: Boolean,
})

const { t } = useI18n()
const router = useRouter()
const user = useUserStore()
const notification = useNotificationStore()
const isMenuActive = ref(false)

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value
}

watch(
  () => router.currentRoute.value,
  () => {
    isMenuActive.value = false
  },
)
</script>

<template>
  <!-- Menu Small Screen Start -->
  <div
    :class="isMenuActive ? 'block' : 'hidden'"
    class="absolute top-0 left-0 h-screen w-screen bg-light-secondary dark:bg-dark-secondary z-50 flex flex-col"
  >
    <div class="flex justify-end">
      <button class="icon-[carbon--close] text-2xl my-4 right-0" @click="toggleMenu" />
    </div>
    <TheMenu />
  </div>
  <!-- Menu Small Screen End -->

  <!-- Navbar Start -->
  <div class="sticky h-16 text-xs m-4 md:text-base bg-light-secondary dark:bg-dark-secondary rounded-lg flex flex-row justify-center px-4 shadow-lg z-50">
    <!-- Left Side Start -->
    <!-- Menu Small Screen -->
    <div class="flex md:hidden text-sm lg:text-base mr-auto">
      <div class="flex flex-row justify-center items-center h-full">
        <button class="icon-[carbon--menu] text-2xl my-auto" @click="toggleMenu" />
      </div>
    </div>
    <!-- Logo -->
    <RouterLink v-if="props.isShowLogo" to="/" class="w-8 m-auto hidden md:block">
      <img src="@/assets/logo.svg" alt="logo">
    </RouterLink>
    <!-- Left Side End -->

    <!-- Mid Side Start -->
    <div class="hidden md:block flex-grow text-sm lg:text-base">
      <div v-if="props.isShowMenu" class="flex flex-row justify-center items-center h-full gap-1 xl:gap-4">
        <TheMenu />
      </div>
    </div>
    <!-- Mid Side End -->

    <!-- Right Side Start -->

    <!-- Notification Start -->
    <div class="group relative flex mr-8">
      <div class="cursor-pointer flex">
        <span class="relative flex h-3 w-3 my-auto translate-x-5 -translate-y-2 ">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full
           bg-success-300 opacity-75"
          />
          <span class="relative inline-flex rounded-full h-3 w-3 bg-success" />
        </span>
        <button class="icon-[carbon--notification] text-xl my-auto relative z-0" />
      </div>
      <div
        class="absolute hidden group-hover:block z-40 top-4 -right-8 pt-10
       transition-all transform duration-500"
      >
        <div
          class="block bg-slate-50 dark:bg-slate-700 w-8 h-4 absolute top-6 right-6 shadow-xl"
          style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"
        />
        <div class="bg-slate-50 dark:bg-slate-700 rounded-lg w-96 h-96 flex flex-col shadow-lg">
          <div class="flex flex-row justify-between p-4 border-b dark:border-slate-500">
            <h5>Notifications</h5>
            <span class="icon-[carbon--email] text-2xl" />
          </div>
          <div class="flex-grow flex-col overflow-auto">
            <div v-for="(value, index) in notification.getNotifications" :key="value.id">
              <!-- TODO: event click will be route to page of detail notification -->
              <div
                :class="[notification.getNotifications.length - 1 !== index
                  && 'border-b dark:border-slate-500']"
                class="flex flex-row p-1 h-20 hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer"
                @click.prevent="notification.readNotification(value.id)"
              >
                <img :src="value.imageFrom" alt="avatar" class="w-8 h-8 rounded-full my-auto">
                <div class="mx-2">
                  <h5 class="font-bold">
                    {{ value.title }}
                  </h5>
                  <p class="text-sm line-clamp-2">
                    {{ value.message }}
                  </p>
                </div>
                <div class="w-4">
                  <div v-if="!value.isRead" class="rounded-full h-3 w-3 bg-primary" />
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center p-2 border-t  dark:border-slate-500">
            <!-- TODO: add router link to page list notification -->
            <span class="text-sm cursor-pointer">
              View all notifications
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- Notification End -->
    <!--
        User Navigation
        TODO:
        - Change Image to User Image
    -->
    <div class="relative group flex">
      <span class="my-auto">{{ user.getUser?.first_name }} {{ user.getUser?.last_name }}</span>
      <span class="icon-[carbon--chevron-down] font-bold text-lg mx-2 my-auto group-hover:rotate-180 transition duration-500" />
      <img
        :src="user.getUser?.avatar"
        alt="user"
        class="w-8 h-8 rounded-full my-auto cursor-pointer"
      >
      <!-- Dropdown -->
      <div
        class="absolute hidden pt-12 z-40 group-hover:block
       -right-4"
      >
        <div
          class="block bg-slate-50 dark:bg-slate-700 w-8 h-4 translate-x-36 shadow-lg"
          style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"
        />
        <div class="block bg-slate-50 dark:bg-slate-700 rounded-lg w-48 shadow-lg">
          <RouterLink class="w-full" to="/account-setting">
            <div class="py-2 px-4 hover:bg-slate-200 dark:hover:bg-slate-600 whitespace-no-wrap rounded-t-lg">
              {{ t('navbar.account_settings') }}
            </div>
          </RouterLink>
          <RouterLink class="w-full" to="/help">
            <div class="py-2 px-4 hover:bg-slate-200 dark:hover:bg-slate-600 whitespace-no-wrap">
              {{ t('navbar.get_help') }}
            </div>
          </RouterLink>
          <RouterLink class="w-full" to="/privacy-policy">
            <div class="py-2 px-4 hover:bg-slate-200 dark:hover:bg-slate-600 whitespace-no-wrap">
              {{ t('navbar.privacy_policy') }}
            </div>
          </RouterLink>
          <a @click="user.logout">
            <div
              class="py-2 px-4 hover:bg-slate-200 dark:hover:bg-slate-600 whitespace-no-wrap rounded-b-lg
             text-danger cursor-pointer"
            >
              {{ t('navbar.logout') }}
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- User Navigation End -->
    <!-- Right Side End -->
  </div>
  <!-- Navbar End -->
</template>
