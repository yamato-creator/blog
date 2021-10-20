<template>
  <v-container fluid>
    <breadcrumbs :add-items="addBreads" />
    <template v-if="currentPost">
      {{ currentPost.fields.title }}
      <v-img
        :src="setEyeCatch(currentPost).url"
        :alt="setEyeCatch(currentPost).title"
        :aspect-ratio="16/9"
        width="700"
        height="400"
        class="mx-auto"
      />
      {{ currentPost.fields.publishDate }}<br>
      {{ currentPost.fields.body }}
      <breadcrumbs :add-items="addBreads" />
    </template>

    <template v-else>
      お探しの記事は見つかりませんでした。
    </template>

    <div>
      <v-btn
        outlined
        color="primary"
        to="/"
      >
        <v-icon size="16">
          fas fa-angle-double-left
        </v-icon>
        <span class="ml-1">ホームへ戻る</span>
      </v-btn>
    </div>
    <client-only>
    <share-btns :page-title="currentPost.fields.title" />
    <follow-btns />
  </client-only>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import shareBtns from '~/components/ui/shareBtns'
import followBtns from '~/components/ui/followBtns'

export default {
  components: {
    shareBtns, followBtns
  },
  computed: {
    ...mapGetters(['setEyeCatch', 'linkTo']),
    addBreads() {
      return [
        {
          icon: 'mdi-folder-outline',
          text: this.category.fields.name,
          to: this.linkTo('categories', this.category)
        }
      ]
    },
     breadcrumbs() {
      const category = this.currentPost.fields.category
      return [
        { text: 'ホーム', to: '/' },
        { text: category.fields.name, to: '#' }
      ]
    }
  },
  async asyncData({ payload, store, params, error }) {
    const currentPost = payload || await store.state.posts.find(post => post.fields.slug === params.slug)

    if (currentPost) {
      return {
        currentPost,
        category: currentPost.fields.category
      }
    } else {
      return error({ statusCode: 400 })
    }
  }
}
</script>