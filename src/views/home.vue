<template>
  <div class='home'>
    <agent-head ref="head" />
    <section>
      <router-view />
    </section>
  </div>
</template>

<script>
import agentHead from '@/components/agent-head'
export default {
  name: 'Home',
  data() {
    return {

    }
  },
  components: {
    agentHead
  },
  methods: {}
}
</script>

<style scoped lang='less'>
.home {
  width: 90%;
  margin: 0 auto;
}
</style>
