<template>
  <div>
    <v-layout align-center justify-center>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="12" md="5">
          <v-card elevation="24">
            <v-toolbar color="info" elevation="0">
              <v-toolbar-title
                ><h2>{{ $t('register.head') }}</h2>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form @submit.prevent="onSubmit">
                <v-text-field
                  v-model="school"
                  required
                  append-icon="school"
                  :label="$t('register.school')"
                />
                <v-text-field
                  v-model="name"
                  required
                  append-icon="person"
                  :label="$t('register.name')"
                />
                <v-text-field
                  v-model="email"
                  required
                  append-icon="email"
                  :label="$t('register.email')"
                />
                <v-text-field
                  v-model="pass"
                  required
                  append-icon="visibility"
                  :label="$t('register.pass')"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn outlined text color="primary">{{
                $t('register.regBtn')
              }}</v-btn>
              <v-spacer></v-spacer>
              <n-link to="/login">
                <v-btn text color="secondary">{{
                  $t('register.loginBtn')
                }}</v-btn>
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
      school: '',
      name: '',
      email: '',
      pass: '',
    }
  },
}
</script>
