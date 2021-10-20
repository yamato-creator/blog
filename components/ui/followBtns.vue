<template>
  <div>
    <v-btn
      outlined
      color="twitter"
      @click="windowOpen(twitterLink)"
    >
      <v-icon
        aria-hidden="false"
        aria-label="Twitter"
        class="mr-1"
      >
        fab fa-twitter
      </v-icon>
      フォローする
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      twitterLink: `https://twitter.com/intent/follow?screen_name=${process.env.TWITTER_ACCOUNT}`
    }
  },
  methods: {
    windowOpen(link) {
      return window.open(link, '_blank', 'top=100,left=100,width=600,height=540')
    }
  }
}
</script>