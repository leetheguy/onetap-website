<template>
<div>
  <PopTart/>
  <Header/>
    <div class="w-100 flex justify-center pt4">
      <iframe :src="formSrc" width="800" height="1100" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
    </div>
  <TenSpacer/>
  <Footer/>
</div>
</template>

<script>
import PopTart from '@/components/widgets/PopTart.vue'
import TenSpacer from '@/components/widgets/TenSpacer.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Contact',
  components: {
    PopTart,
    TenSpacer,
    Header,
    Footer,
  },
  props: ['formSubject'],
  data: function() {
    return {
      defaultForm: "https://docs.google.com/forms/d/e/1FAIpQLSfFNcqlBs6zbVHaLZ213_Z0KSYJla4VbKI7u3bgUM655YxqSA/viewform?embedded=true&usp=pp_url&entry.1567004409=I+have+a+general+question.",
      consultationForm: "https://docs.google.com/forms/d/e/1FAIpQLSfFNcqlBs6zbVHaLZ213_Z0KSYJla4VbKI7u3bgUM655YxqSA/viewform?embedded=true&usp=pp_url&entry.1567004409=I+would+like+a+Free+Consultation.",
      workForm: "https://docs.google.com/forms/d/e/1FAIpQLSfFNcqlBs6zbVHaLZ213_Z0KSYJla4VbKI7u3bgUM655YxqSA/viewform?embedded=true&usp=pp_url&entry.1567004409=I'm+interested+in+working+with+One+Tap+Software.",
    }
  },
  computed: {
    formSrc: function() { 
      let form = this.defaultForm;
      if(this.formSubject === "default") { form = this.defaultForm }
      else if(this.formSubject === "consultation") { form = this.consultationForm }
      else if(this.formSubject === "work") { form = this.workForm }
      return form;
    }
  }
}
</script>

<style scoped>
</style>

