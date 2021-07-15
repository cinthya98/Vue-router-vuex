<template>
 <div class="home">

  <h1 class="font-bold">Hola {{username.name}}</h1>
  <h3 class=" font-bold text-blue-400 mb-8">{{ title }}</h3>

    <div class="border border solid w-80 flex items-center text-center">
      <div class="m-auto">
        <h1 class="mt-5 font-bold text-red-400 mb-8 text-4xl">Contador</h1>
        <h1 class="font-bold text-7xl ">{{count}}</h1>
        <button class="px-2 bg-gray-400 rounded font-bold mr-2 mt-5 text-5xl" @click="INCREMENT(1)">+</button>
        <button class="px-4 bg-gray-400 rounded font-bold text-5xl" @click="DECREMENT(-1)">-</button>

        <h1 class="mt-5">Número: {{calcular}} </h1>
        <h1>Mitad: {{half_count}} </h1>
        <button class="mt-5 mb-5 px-3 bg-green-600 rounded font-bold" @click="set">Restablecer</button>
      </div>
    
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations} from 'vuex'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data(){
    return {
      fetchInterval: null,
    }
  },
  mounted(){
    let i = 0;
    clearInterval(this.fetchInterval);
    this.fetchInterval = setInterval(() => {
      this.GET_USERNAME(i % 3);
      ++i;
    }, 1000);
  },
  computed: {
    ...mapGetters({
      title: 'title'
    }),

    ...mapState([
      "count"
      ]),
    ...mapGetters({
      username: 'users/username',
      calcular: 'calcular'
    }),
      half_count() {
      return this.count / 2;
    }
  },
  methods: {
    ...mapActions({
      GET_USERNAME: 'users/GET_USERNAME',
      
    }),

    ...mapActions([
      'RESET'
    ]),

    set:function(){
      this.reset(999);
    },

    ...mapMutations([
      "INCREMENT", 
      "DECREMENT"
      ]),
  }
}
</script>
