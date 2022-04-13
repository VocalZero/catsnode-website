<template>
  <div class="text-white font-light select-none text-left lg:text-right">
    <div class="text-base text-2xl"><span class="font-bold">NEXT</span> TRACK</div>
    <div class="mt-3 bg-white bg-opacity-30 overflow-hidden rounded-xl text-lg py-6 px-6 leading-6" :title="track.artist + ' - ' + track.title">
      <!-- TITLE -->
      <p class="-mb-1 font-bold truncate">{{ track.title }}</p>
      <!-- ARTIST -->
      <p class="-mb-1 truncate">{{ track.artist }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["track"]
}
</script>
