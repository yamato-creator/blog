<template>
  <div>
    <p class="font-weight-bold">
      この記事をフォロワーにシェアする
    </p>
    <v-btn
      color="twitter"
      @click="windowOpen(twitterShareLink)"
    >
      <v-icon
        aria-hidden="false"
        aria-label="twitter"
        class="mr-1"
      >
        fab fa-twitter
      </v-icon>
      <b>シェア!!</b>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      default: process.env.SITE_NAME
    }
  },
  data() {
    return {
      url: (process.env.BASE_URL + this.$route.path),
      twitter: process.env.TWITTER_ACCOUNT,
      hashtag: process.env.SITE_NAME,
      twitterLink: 'https://twitter.com/intent/tweet?url={0}&text={1}&hashtags={2}&related={3}&via={4}&lang=ja'
    }
  },
  computed: {
    twitterShareLink() {
      // link, url{0}, text{1}, hashtags{2}, related{3}, via{4}
      return this.formatByArr(this.twitterLink, this.url, this.pageTitle, this.hashtag, this.twitter, this.twitter)
    }
  },
  methods: {
    formatByArr(msg) {
      let args = []
      for (let i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i]
      }
      args = args.map(x => encodeURIComponent(x))
      return msg.replace(/\{(\d+)\}/g, (m, k) => {
        return args[k]
      })
    },
    windowOpen(link) {
      return window.open(link, '_blank', 'top=100,left=100,width=600,height=500')
    }
  }
}
</script>