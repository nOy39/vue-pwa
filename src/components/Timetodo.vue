<template>
  <div v-if="!loading">
    <v-container grid-list-lg class="white--text">
      <v-text-field
        class="my-3"
        hide-details
        v-model="location"
        :label="locationCity"
        prepend-inner-icon="search"
      ></v-text-field>
      <v-layout row wrap>
        <v-flex xs12 sm12 md6 lg6 v-for="event in events"
                :key="event.id">
          <v-card color="green accent-3" class="elevation-10">
            <v-layout text-xs-center>
              <v-flex class="font-weight-light">
                <strong>{{event.name}}</strong>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-container>
              <v-layout>
                <v-flex xl5>
                  <v-card-media
                    height="125px"
                    width="125px"
                    contain
                    :src="event.poster_image.default_url"
                  >
                  </v-card-media>
                </v-flex>
                <v-divider light vertical></v-divider>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="font-weight-thin">{{event.description_short.slice(0,100)}}...</div>
                      <br>
                      <div>{{event.starts_at | moment("D MMMM YYYY, dddd HH:mm")}}</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-container>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3">
              <span class="font-weight-thin">Цена билета от {{event.registration_data.price_min}} рублей.</span><br>
              <v-divider vertical></v-divider>
              <v-spacer></v-spacer>
              <v-btn
                flat
                fab
                light
                color="white"
                disabled>
                <v-tooltip bottom>
                  <v-icon
                    slot="activator"
                    >share</v-icon>
                  <span>Поделиться</span>
                </v-tooltip>
              </v-btn>
              <v-btn
                flat
                fab
                light
                color="white"
                :to="'/details/' + event.id">
                <v-tooltip bottom>
                  <v-icon
                    slot="activator"
                    >move_to_inbox</v-icon>
                  <span>Открыть</span>
                </v-tooltip>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <div class="text-xs-center" v-show="!addEvents">
        <v-btn
          outline
          medium
          fab
          color="grey"
          @click="upperLimit">
          <v-icon>add</v-icon>
        </v-btn>
      </div>
      <div class="text-xs-center" v-show="addEvents">
        <v-progress-circular
          :size="50"
          color="grey"
          indeterminate
          value="5"
        ></v-progress-circular>
      </div>
    </v-container>
  </div>
  <div v-else>
    <v-progress-circular
      :size="70"
      :width="7"
      color="grey"
      :indeterminate="true"
    ></v-progress-circular>
  </div>
</template>
<script>
  export default {
    name: 'Timetodo',
    data () {
      return {
        location: '',
        show: false
      }
    },
    beforeCreate () {
      this.$store.dispatch('setLoading', true)
    },
    created () {
      this.$store.dispatch('fetchEvents', this.city)
    },
    beforeUpdate () {
      this.$store.dispatch('fetchEvents', this.city)
    },
    computed: {
      events () {
        return this.$store.getters.getEvents
      },
      locationCity () {
        if (this.location === '') {
          return 'Все города'
        } else {
          return this.location
        }
      },
      city () {
        if (this.location === '') {
          return ''
        } else {
          return '&cities=' + this.location
        }
      },
      loading () {
        return this.$store.getters.getLoading
      },
      addEvents () {
        return this.$store.getters.getLoadingElement
      }
    },
    methods: {
      upperLimit () {
        this.$store.dispatch('setLoadingElements', true)
        this.$store.dispatch('setLimit', 25)
      }
    }
  }
</script>

<style scoped>
  .headname {
    padding: 10px;
    background: rgba(0, 0, 0, .5);
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
    border: 2px black;
    text-decoration: none;
    font-size: 14px;
  }

</style>
