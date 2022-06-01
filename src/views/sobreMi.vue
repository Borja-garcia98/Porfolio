 <template>
  <figure class="md:flex rounded-xl p-8 md:p-0">
    <div class="pt-6 md:p-8 text-left md:text-left space-y-4 sub">
      <div>
        <img alt="dafo" class="dafo" src="@/assets/dafo.png" />
      </div>

      <div class="text-light-primary dark:text-dark-primary">
        <img alt="skills" class="skills" src="@/assets/skills.png" />
      </div>
      <transition name="fade" appear>
        <button class="bg-sky-blue dark:bg-dark-primary py-4 px-12 rounded-md text-white flex items-center gap-3" @click="navigateToCv">
          <v-icon name="download" class="fill-current" />CV
        </button>
      </transition>
    </div>
  </figure>
</template>

<script>
export default {
  name: "sobreMi",

  methods: {
    navigateToCv() {
      window.location.href = "/CV_Borja.pdf";
    },
  },
};
</script>

<style scoped>
.skills {
  width: 100%;
  height: 100%;
}
.dafo {
  width: 100%;
  height: 100%;
  margin: 0%;
}
</style>

