<template>



  <v-container grid-list-md>

    <v-card color="cyan darken-2" class="white--text">
      <v-layout>
        <v-flex xl5>
          <v-card-media
            src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
            height="125px"
            contain
            width="250px"
          ></v-card-media>
        </v-flex>
        <v-flex xs7>
          <v-card-title primary-title>
            <div>
              <div class="headline">Supermodel</div>
              <div>Foster the People</div>
              <div>(2014)</div>
            </div>
          </v-card-title>
        </v-flex>
      </v-layout>
      <v-divider light></v-divider>
      <v-card-actions class="pa-3">
        Rate this album
        <v-spacer></v-spacer>
        <v-icon>star_border</v-icon>
        <v-icon>star_border</v-icon>
        <v-icon>star_border</v-icon>
        <v-icon>star_border</v-icon>
        <v-icon>star_border</v-icon>
      </v-card-actions>
    </v-card>
    <v-divider light></v-divider>
      <v-layout row wrap>
        <v-flex xs12 sm12 md6 lg12>
          <v-card>
            <v-card color="cyan darken-2" class="white--text">
              <v-layout>
                <v-flex xl5>
                  <v-card-media
                    src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                    height="125px"
                    contain
                    width="250px"
                  ></v-card-media>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Supermodel</div>
                      <div>Foster the People</div>
                      <div>(2014)</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this album
                <v-spacer></v-spacer>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
              </v-card-actions>
            </v-card>
            <v-card color="purple" class="white--text">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Halycon Days</div>
                      <div>Ellie Goulding</div>
                      <div>(2013)</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-card-media
                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                    height="125px"
                    contain
                  ></v-card-media>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this album
                <v-spacer></v-spacer>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
              </v-card-actions>
            </v-card>
          </v-card>
          <v-card class="elevation-10">
            <v-card-media
              class="white--text"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 md6 flexbox>
                    <div class="headname">
                      <span class="headline">sdsdsdsdsd</span>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
            <v-card-title>
              <div>
                <span><strong>zzzzzzzzzz</strong></span><br>
                <span>{sssssssssssssssssssss</span>

                <div class="mt-2">
                  <span class="grey--text">Цена билета от 4545 рублей.</span><br>
                </div>
              </div>
              <br>
              <span class="grey--text mt-2">Начало: sd23 srsdfsdf</span><br>
            </v-card-title>
            <v-card-actions>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      events: {
        categories: {
          id: 453,
          name: 'Психология и самопознания'
        },
        description_short: 'Впервые в России Президент Хэдж фонда KTCinvesting -- Ричард Дилендорф! Инвестор, Советник нескольких Американских, Европейских и Азиатских компаний, автор книг по финансовому планированию, создатель школы финансового планирования.',
        ends_at: '2018-08-19T16:00:00+0300',
        id: 785178,
        location: {
          address: 'Тверская улица, 26/1',
          city: 'Москва',
          coordinates: ['55.768709',
            '37.5999911'],
          country: 'Россия'
        },
        moderation_status: 'shown',
        name: 'Конференция "Как создать капитал в "Кризис?"',
        organization: {
          id: 138188,
          logo_image: {
            default_url: 'https://ucare.timepad.ru/7af55692-e880-425d-ada4-ff22cd7a654a/-/preview/308x600/-/format/jpeg/logo_org_138188.jpg',
            uploadcare_url: '//ucare.timepad.ru/7af55692-e880-425d-ada4-ff22cd7a654a/'
          },
          name: 'ИП Мынко Александр Владимирович',
          subdomain: 'investfund',
          url: 'https://investfund.timepad.ru/'
        },
        poster_image: {
          default_url: 'https://ucare.timepad.ru/c9aabcd9-81b2-4922-93e7-eb0422dae939/-/crop/1671x480/0,55/-/resize/1200x345/-/preview/100x800/',
          uploadcare_url: '//ucare.timepad.ru/c9aabcd9-81b2-4922-93e7-eb0422dae939/'
        },
        registration_data: {
          is_registration_open: true,
          price_max: 5000,
          price_min: 500,
          sale_ends_at: '2018-08-19T16:00:00+0300',
          tickets_limit: '64',
          tickets_total: 0
        },
        starts_at: '2018-08-19T13:00:00+0300',
        url: 'https://investfund.timepad.ru/event/785178/'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
