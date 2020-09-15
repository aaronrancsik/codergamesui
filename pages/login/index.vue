<template>
  <div>
    <v-layout align-center justify-center>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="12" md="5">
          <v-card elevation="24">
            <v-toolbar color="info" elevation="0">
              <v-toolbar-title>
                <h2>{{ $t('login.head') }}</h2></v-toolbar-title
              >
            </v-toolbar>
            <v-card-text>
              <v-form @submit.prevent="onSubmit">
                <v-text-field
                  v-model="email"
                  required
                  append-icon="email"
                  :label="$t('login.email')"
                />
                <v-text-field
                  v-model="pass"
                  required
                  append-icon="visibility"
                  :label="$t('login.pass')"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn outlined text color="primary">{{
                $t('login.loginBtn')
              }}</v-btn>
              <v-spacer></v-spacer>
              <n-link to="/register"
                ><v-btn text color="secondary">{{ $t('login.regBtn') }}</v-btn>
              </n-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      pass: '',
    }
  },
}
</script>
