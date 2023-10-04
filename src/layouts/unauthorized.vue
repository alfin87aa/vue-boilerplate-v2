<template>
  <main
    class="flex flex-row bg-light dark:bg-dark"
  >
    <div
      id="Banner" class="lg:w-9/12 md:w-1/2 md:flex hidden hero container content-center
     mx-auto pt-24 pb-12 justify-center items-center"
    >
      <div>
        <img class="object-scale-down" src="@/assets/illustration.png" alt="illustration">
      </div>
    </div>
    <div class="relative hidden md:block">
      <div
        class="bg-light-secondary border-light-secondary dark:border-dark-secondary
               dark:bg-dark-secondary translate-x-1  right-0 w-48 h-24 z-0"
        style="clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 60%, 15% 60%, 0 40%);"
      />
      <div class="absolute top-4 left-10 z-10">
        <TheTools />
      </div>
    </div>
    <div
      class="bg-light-secondary dark:bg-dark-secondary shadow-xl
                 absolute z-10 w-32 h-14 rounded-xl transform
                 bottom-5 left-1/2 -translate-x-1/2 md:hidden
                 pt-2 flex justify-center items-center"
    >
      <TheTools />
    </div>
    <div
      id="Forms" class="lg:w-3/12 md:w-1/2 w-full bg-light-secondary border-light-secondary
       dark:border-dark-secondary dark:bg-dark-secondary py-8 px-12 h-screen z-0"
    >
      <RouterView />
    </div>
  </main>
</template>
