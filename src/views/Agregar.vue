<template>
  <div class="agregar">
     <h1 class="mb-5">Ingresa el usuario:</h1>
    <div class="space-y-2 " >
        <form v-on:submit.prevent="addUsers">
          <label class="block">Nombre: </label>
          <input v-model="newU.name" class="border border-current w-60" type="text" >
          <label class="block" >Apellido: </label>
          <input v-model="newU.lastName" class="border border-current w-60" type="text" >
          <label class="block">Edad: </label>
          <input v-model="newU.edad" class="border border-current w-60" type="text" >
          <button type="submit" class="block bg-black text-white px-2 py-1 mt-5 rounded">Agregar</button>
      </form>
    </div>
     <table class="mt-10 table-auto border-collapse border border-blue-800 text-center ">
        <thead>
          <tr >
            <th class="border border-blue-600 bg-blue-200 px-10" >Nombre</th>
            <th class="border border-blue-600 bg-blue-200 px-10" >Apellido</th>
            <th class="border border-blue-600 bg-blue-200 px-10" >Edad</th>
            <th class="border border-blue-600 bg-blue-200 px-10" >Eliminar</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="(newUsers, index) in usernames" v-bind:key="index">
            <td class="border border-blue-600 p-2">{{newUsers.name}}</td>
            <td class="border border-blue-600 p-2">{{newUsers.lastName}}</td>
            <td class="border border-blue-600 p-2">{{newUsers.edad}}</td>
            <td class="border border-blue-600 ">
              <button v-on:click="deleteUsers(index)" class="bg-gray-400 rounded px-2 text-white hover:bg-red-700">X</button>
            </td>
          </tr>
        </tbody>
    </table>

   
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions} from 'vuex'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data(){
    return {
      fetchInterval: null,
      mensaje:"",
      newU:{}
    }
  },
  mounted(){
    let i = 0;

    clearInterval(this.fetchInterval);

    this.fetchInterval = setInterval(() => {
      this.GET_USERNAME(i % 3);
      ++i;
    }, 1000);

    this.GET_ALL_USERNAMES();
  },
  computed: {
     ...mapGetters({
        title: 'title'
     }),
    ...mapGetters({
      username: 'users/username',
      usernames: 'users/usernames'
    })
  },
  methods: {
    ...mapActions({
      GET_USERNAME: 'users/GET_USERNAME',
      GET_ALL_USERNAMES : 'users/GET_ALL_USERNAMES'
    }),
     addUsers(){
        this.usernames.push(this.newU);
        this.newU={};
     },
     deleteUsers(index){
       this.usernames.splice(this.usernames.indexOf(index), 1);
     }
  },
  created:{

  }
}

</script>
