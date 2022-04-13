<template>
  <div
    id="background"
    class="bg-no-repeat bg-cover bg-center"
    style="
      background: url(artwork.webp);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    "
  >
    <div class="backdrop-filter backdrop-blur-lg">
      <div class="font-poppins min-h-screen pt-2 pb-12 flex flex-col">
        <main class="flex-grow flex flex-col justify-center max-w-lg lg:max-w-5xl w-full mx-auto px-4">
          <div class="py-16">
            <div class="text-base text-xl leading-6 font-bold text-white select-none text-center lg:hidden">
              <p class="font-light">POWERED BY</p>
              <p class="-mt-1.5 uppercase">CATSNODE</p>
            </div>
            <div class="flex items-center justify-between text-white select-none hidden lg:flex">
              <!-- POWERED BY -->
              <div class="text-base lg:text-xl leading-6 font-bold">
                <p class="font-light">POWERED BY</p>
                <p class="-mt-1.5 uppercase">CATSNODE</p>
              </div>
              <!-- LISTENERS -->
              <div class="text-base lg:text-xl font-light">
                <div class="flex items-center justify-center">
                  <img class="h-5" alt="" src="~assets/images/speaker.webp" />
                  <span class="mx-2 font-bold">{{ currentTrack.listeners }}</span>
                  LISTENERS
                </div>
              </div>
            </div>
            <div class="mt-4 mb-14 bg-white bg-opacity-30 overflow-hidden rounded-xl">
              <div class="flex space-x-4 lg:space-x-6">
                <!-- COVER -->
                <div>
                  <div class="relative h-full w-24 lg:w-44 rounded-xl overflow-hidden">
                    <!-- ICON -->
                    <div
                      class="
                        flex
                        items-center
                        justify-center
                        absolute
                        bottom-7
                        lg:bottom-14
                        right-7
                        lg:right-14
                        h-10
                        lg:h-16
                        w-10
                        lg:w-16
                        text-white
                        cursor-pointer
                      "
                    >
                      <!-- PLAY ICON -->
                      <img v-show="!playing && !loading" alt="" src="~assets/images/play.webp" @click="play()" />
                      <!-- STOP ICON -->
                      <img v-show="playing && !loading" alt="" src="~assets/images/stop.webp" @click="stop()" />
                      <!-- LOADING ICON -->
                      <img v-show="!playing && loading" class="animate-spin" alt="" src="~assets/images/loading.webp" />
                    </div>
                    <!-- IMAGE -->
                    <img
                      id="artwork"
                      class="object-contain h-full w-24 lg:w-44 rounded-xl"
                      alt=""
                      src="artwork.webp"
                    />
                  </div>
                </div>
                <div class="lg:grid lg:grid-cols-10 flex items-center">
                  <div
                    class="lg:col-span-8 text-lg lg:text-2xl leading-4 lg:leading-5 text-white font-light grid select-none mr-4"
                    :title="currentTrack.artist + ' - ' + currentTrack.title"
                  >
                    <!-- TITLE -->
                    <p class="font-bold text-2xl lg:text-4xl truncate">
                      {{ currentTrack.title }}
                    </p>
                    <!-- ARTIST -->
                    <p class="truncate">{{ currentTrack.artist }}</p>
                  </div>
                  <!-- VOLUME -->
                  <input
                    id="volume"
                    class="h-1.5 w-32 bg-gray-300 rounded-full hidden lg:block volume-slider"
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value="50"
                  />
                </div>
              </div>
              <!-- PROGRESSBAR -->
              <div class="relative h-1 lg:h-1.5 w-full bg-gray-300 -mt-1.5">
                <div
                  id="progressbar"
                  class="progress bar rounded-r-full animate-pulse"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 100%"
                ></div>
              </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-36">
              <!-- LAST TRACK -->
              <LastTrack :track="lastTrack" />
              <!-- NEXT TRACK -->
              <NextTrack :track="nextTrack" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      currentTrack: {
        title: "TITLE",
        artist: "ARTIST",
        listeners: 0,
        start: new Date(),
        end: new Date(),
        duration: 0
      },
      lastTrack: {
        title: "TITLE",
        artist: "ARTIST"
      },
      nextTrack: {
        title: "TITLE",
        artist: "ARTIST"
      },
      playing: false,
      loading: false,
      volume: 0.5
    }
  }
})
</script>

<style>
.progress {
  height: 100%;
  background-color: #ffffff;
  transition-duration: 1s;
  transition-timing-function: ease-out;
  transform: translateX(-100%);
}
.bar {
  transform: translateX(0%);
}
.volume-slider {
  -webkit-appearance: none;
  appearance: none;
  outline: none;
}
.volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  background: #ffffff;
  border-radius: 100%;
  cursor: pointer;
}
.volume-slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background: #ffffff;
  border-radius: 100%;
  cursor: pointer;
}
</style>
