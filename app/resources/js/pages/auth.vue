<template>
  <div class="mx-auto">
    <div class="flex mx-48 flex-wrap pt-24 lg:max-w-full">
      <div
        v-for="(value,index) in data"
        :key="index"
        class="max-w-sm rounded overflow-hidden shadow-lg mx-6 my-6"
      >
        <img class="w-full" :src="value.image" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{value.title}}</div>
          <p class="text-gray-700 text-base">{{value.excerpt}}</p>
        </div>
        <div class="px-6 py-4">
          <span
            v-for="(tag,index) in tags"
            :key="index"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >{{tag}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>