<template>
  <q-layout view="lHh Lpr lFf" style="height: 100vh; min-height: 100%">
    <q-header
      reveal
      class="container bg-transparent q-pt-lg"
      :class="this.$route.name != 'Authentication' ? 'q-pb-xl' : 'q-pb-0'"
    >
      <q-toolbar>
        <router-link to="/">
          <q-avatar>
            <img src="../public/img/icons/logo.svg" />
          </q-avatar>
        </router-link>
        <q-toolbar-title></q-toolbar-title>
        <router-link class="iconNav" to="/">
          <q-btn
            class="iconNav"
            flat
            round
            dense
            icon="img:/img/icons/mail_nav.svg"
          />
        </router-link>
        <router-link
          class="iconNav activated"
          to="/"
          v-if="this.$route.name == 'Authentication'"
        >
          <q-btn flat round dense icon="img:/img/icons/Sign.svg" />
        </router-link>
        <router-link
          class="iconNav activated"
          to="/sign-up/sign-in"
          v-if="this.$route.name == 'Home'"
        >
          <q-btn
            class="iconNav"
            flat
            round
            dense
            icon="img:/img/icons/user_nav.svg"
          />
        </router-link>
        <router-link class="iconNav" to="/">
          <q-btn flat round dense icon="img:/img/icons/layer_nav.svg" />
        </router-link>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
    <div
      class="container q-mt-lg q-pb-lg flex justify-end"
      v-if="this.$route.name != 'Authentication'"
    >
      <img src="./assets/imgs/footer.svg" class="q-mb-sm" />
      <p class="text-right footTextHome">
        All rights reserved © Businessnoura 2019
      </p>
    </div>
  </q-layout>
</template>

<script>
export default {
  name: "LayoutDefault",

  data() {
    return {};
  },
};
</script>

<style>
.footTextHome {
  width: 100%;
  color: black;
}
</style>
