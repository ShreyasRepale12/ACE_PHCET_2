<template>
  <div>
    <Navbar />
    <div v-if="!$store.state.phone">
      <div class="pt-20 md:pt-24">
        <div class="grid grid-cols-6">
          <div
            class="
              col-start-1
              md:col-start-2
              col-span-8
              md:col-span-4 md:px-8
              px-4
              md:mx-8
            "
          >
            <form class="rounded-lg border-2 p-4">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-lg
                      font-bold
                      mb-2
                    "
                    for="curr_year"
                  >
                    Current Year
                  </label>
                  <input
                    v-model="curr_year"
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-200
                      text-gray-700
                      border border-gray-200
                      rounded
                      py-3
                      px-4
                      mb-3
                      leading-tight
                      focus:outline-none focus:bg-white focus:border-gray-500
                    "
                    id="curr-year"
                    type="text"
                    placeholder="FE/SE/TE/BE"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-lg
                      font-bold
                      mb-2
                    "
                    for="division"
                  >
                    Division
                  </label>
                  <input
                    v-model="division"
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-200
                      text-gray-700
                      border border-gray-200
                      rounded
                      py-3
                      px-4
                      mb-3
                      leading-tight
                      focus:outline-none focus:bg-white focus:border-gray-500
                    "
                    id="division"
                    type="text"
                    placeholder="A/B"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-lg
                      font-bold
                      mb-2
                    "
                    for="department"
                  >
                    Department
                  </label>
                  <input
                    v-model="department"
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-200
                      text-gray-700
                      border border-gray-200
                      rounded
                      py-3
                      px-4
                      mb-3
                      leading-tight
                      focus:outline-none focus:bg-white focus:border-gray-500
                    "
                    id="department"
                    type="text"
                    placeholder="IT/Comps/Mech/Civil/Extc/Elect"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-lg
                      font-bold
                      mb-2
                    "
                    for="contact"
                  >
                    Contact/WhatsApp Number
                  </label>
                  <input
                    v-model="phone"
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-200
                      text-gray-700
                      border border-gray-200
                      rounded
                      py-3
                      px-4
                      mb-3
                      leading-tight
                      focus:outline-none focus:bg-white focus:border-gray-500
                    "
                    id="contact"
                    type="text"
                    placeholder="9876543210"
                  />
                </div>
              </div>
              <button
                @click="postData()"
                class="
                  focus:outline-none
                  transition
                  duration-150
                  ease-in-out
                  text-white
                  hover:bg-green-600
                  rounded-full
                  text-white
                  px-5
                  sm:px-8
                  py-1
                  sm:py-2
                  text-sm
                  bg-gradient-to-r
                  from-green-400
                  to-blue-500
                  hover:from-pink-500 hover:to-yellow-500
                  font-semibold
                "
                style="background-color: #4ce6a7"
              >
                Save Information
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="grid grid-cols-3 gap-4 px-4 md:px-60">
        <div class="">
          <div class="relative">
            <img
              class="rounded-full border border-gray-100 shadow-sm"
              :src="$store.state.user_avatar"
              alt="user image"
            />
          </div>
        </div>
        <div class="col-span-2">
          <h1>{{this.$store.state.name}}</h1><br>
          <h1>{{this.$store.state.email}}</h1><br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curr_year: "",
      division: "",
      department: "",
      phone: "",
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
  methods: {
    async postData() {
      const data = {
        name: this.$store.state.name,
        email: this.$store.state.email,
        user_class: this.curr_year,
        user_department: this.department,
        phone: this.phone,
      };
      this.$store.commit("updateThroughPage", {
        user_class: this.curr_year,
        user_department: this.department,
        user_division: this.division,
        phone: this.phone,
      });
      const ip = await this.$axios
        .$post("https://ace-phcet.herokuapp.com/api/add/", data)
        .then(console.log(ip));
    },
  },
};
</script>

<style>
</style>