<template>
  <section class="hero is-bold app-navbar animated" :class="{ slideInDown: show, slideOutDown: !show }">
    <div class="hero-head">
      <!-- <nav class="nav">
        <div class="nav-left">
          <a class="nav-item is-hidden-tablet" @click="toggleSidebar({opened: !sidebar.opened})">
            <i class="fa fa-bars" aria-hidden="true" v-show="!sidebar.hidden"></i>
          </a>
        </div>
        <div class="nav-center">
          <a class="nav-item hero-brand" href="/">
            <img src="~assets/logo.svg" :alt="pkginfo.description" height="28" />
          </a>
        </div>
        <div class="nav-right is-flex">
          <router-link v-if="!$auth.check()" to="/login" class="nav-item">Login</router-link>
          <a v-if="$auth.check()" @click="logout" class="nav-item">Logout</a>
        </div>
      </nav> -->

      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="~assets/logo.svg" alt="Bulma: a modern CSS framework based on Flexbox" width="auto" height="28">
            <span>{{ pkginfo.description }}</span>
          </a>
          <div class="navbar-burger burger" v-bind:class="{'is-active': menuActived}" @click="menuActived = !menuActived">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="navbar-menu" v-bind:class="{'is-active': menuActived}">
          <div class="navbar-start">
            <a class="navbar-item" href="/">
              Home
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="button is-primary">
                    <span class="icon"><i class="fa fa-user-o" aria-hidden="true"></i></span>
                    <span>Login</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
// import Tooltip from ''
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    // Tooltip
  },

  props: {
    show: Boolean
  },

  data: function () {
    return {
      menuActived: false
    }
  },

  computed: mapGetters({
    pkginfo: 'pkg',
    sidebar: 'sidebar'
  }),

  methods: {
    toggleTopMenu (el) {
      el.classList.add('is-active')
    },
    ...mapActions(['toggleSidebar']),
    logout () {
      this.$auth.logout({
        redirect: 'Home',
        makeRequest: false
        // params: {}
        // success: function () {}
        // error: function () {}
        // etc...
      })
    }
  }
}
</script>

<style lang="scss">
@import "~bulma/bulma";

.app-navbar {
  position: fixed;
  min-width: 100%;
  z-index: 1024;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);

  .container {
    margin: auto 10px;
  }

  .nav-right {
    align-items: stretch;
    flex: 1;
    justify-content: flex-end;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
  }
}

.navbar-brand {
  .vue {
    margin-left: 10px;
    color: #36ac70;
  }
  .admin {
    color: #28374b;
  }
  a {
    img {
      margin-right: 10px;
    }
  }
}
</style>
