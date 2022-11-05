<template>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://unpkg.com/tailwindcss@^2.0/dist/tailwind.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css%22%3E">
        <main>
            <nav class="flex items-center justify-between flex-wrap p-6">
                <div class="flex items-center flex-shrink-0 text-black mr-6">
                    <img src="../assets/logo.png" width="70" height="70">
                    <span class="font-semibold font text-xl tracking-tight">MyShop</span>
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-100 border-teal-400 hover:text-white hover:border-white" id="navbar-btn">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <span class="w-screen md:w-1/3 h-10 bg-gray-400 cursor-pointer border border-gray-400 text-sm flex object-center">
                  <input type="search" name="search" placeholder="Search"
                         class="flex-grow px-4 text-sm focus:outline-none">
                  <i class="bi bi-search items-center align-items mt-1 ml-5 mr-5 mb-12 text-lg text-gray-700">
                    <img src="../assets/searchemoji.png" width="25" height="25">
                  </i>
                </span>
                  <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-blue-400 border-blue-400 hover:border-transparent hover:text-white hover:bg-blue-600 mt-4 lg:mt-0 ml-3">Log in</a>
                 
        </nav>
    </main>
    <div class="form-row">
      <button @click="logout()" class="button">
        Déconnexion
      </button>
    </div>
  
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Profile',
  mounted: function () {
    console.log(this.$store.state.user);
    if (this.$store.state.user.userId == -1) {
      this.$router.push('/');
      return ;
    }
    this.$store.dispatch('getUserInfos');
  },
  computed: {
    ...mapState({
      user: 'userInfos',
    })
  },
  methods: {
    logout: function () {
      this.$store.commit('logout');
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>

</style>>
