<template>
  <div>
    <v-row class="ma-1">
      <v-col xl="3" class="d-flex flex-column test pa-4">
        <slot></slot>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.test {
  min-width: 250px;
}
</style>
