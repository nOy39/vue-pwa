<template>
  <v-app
    id="inspire"
    :dark="dark"
  >
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
      class="hidden-lg-and-up"
      temporary
    >
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.text" :to="item.url">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-subheader class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        <v-list>
          <v-list-tile v-for="item in items2" :key="item.text" avatar @click="">
            <v-list-tile-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
            </v-list-tile-avatar>
            <v-list-tile-title v-text="item.text"></v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-list-tile class="mt-3" @click="">
          <v-list-tile-action>
            <v-icon color="grey darken-1">add_circle_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon color="grey darken-1">settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon
        class="hidden-lg-and-up"
        @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title><div class="title">I'm going...</div></v-toolbar-title>
      <v-bottom-nav
        :value="true"
        absolute
        color="transparent"
        class="hidden-md-and-down">

        <v-divider light vertical></v-divider>
          <v-btn v-for="button in items"
                 :key="button.url"
                 color="dark"
                 flat
                 value="recent"
                 :to="button.url"
          >
            <span>{{button.text}}</span>
            <v-icon>{{button.icon}}</v-icon>
          </v-btn>

        <v-divider light vertical></v-divider>
      </v-bottom-nav>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <slot></slot>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      items: [
        { icon: 'trending_up', text: 'Главная', url: '/' },
        { icon: 'trending_up', text: 'Новости', url: '/article' },
        { icon: 'subtitles', text: 'Истории', url: '/history' }
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' }
      ],
      dark: false
    }),
    props: {
      source: String
    }
  }
</script>

<style scoped>
  .v-toolbar__title{
    font-family: arial, sans-serif;
  }
</style>
