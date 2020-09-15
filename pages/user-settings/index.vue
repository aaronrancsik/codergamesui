<template>
  <div>
    <main>
      <h1>{{ $t('greeting') }}</h1>

      <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
        English
      </nuxt-link>

      <nuxt-link v-if="$i18n.locale !== 'hu'" :to="switchLocalePath('hu')">
        Magyar
      </nuxt-link>
    </main>
  </div>
</template>
