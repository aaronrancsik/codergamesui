<template>
  <div>
    <ResponsiveGrid>
      <v-card class="elevation-24 flex d-flex flex-column">
        <v-card-title>
          <h3 class="retroFont">
            <b class="primary--text">></b><b class="primary--text terminal">_</b
            ><span class="info--text"
              >THE
              <br />
              CODER
              <br />
              GAMES
            </span>
          </h3>
        </v-card-title>
        <v-card-actions>
          <v-btn id="game" to="/app" outlined color="primary" large>
            {{ $t('home.start') }}
          </v-btn>
          <v-btn to="/register" outlined color="secondary" large>
            {{ $t('home.register') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </ResponsiveGrid>
  </div>
</template>
