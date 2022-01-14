<template>
  <div class="dashboard-layout ">
    <v-navigation-drawer
      app
      permanent
      v-if="toggle"
      color="#000000"
      class="card-shadow sidebar "
    >
      <v-list>
        <div class="text-center  ">
        </div>
        
      </v-list>


      <v-list nav  flat>
        <v-list-item
          link
          :to="'/dashboard'"
          active-class=" primary--text"
          
        >
          <v-list-item-icon>
          <v-icon color="white">mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text text-left align-self-center" >Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item
          link
          :to="'/pickups'"
          active-class="bg-primary primary--text"
        >
          <v-list-item-icon class="">
          <v-icon color="white">mdi-solid</v-icon>
          
          </v-list-item-icon>
          <v-list-item-title class=" white--text text-left align-self-center ">List item one</v-list-item-title>
        </v-list-item>
        <v-list-item
          link
          active-class="bg-primary primary--text"
        >
          <v-list-item-icon>
          <v-icon color="white">mdi-solid</v-icon>

          </v-list-item-icon>
          <v-list-item-title class=" white--text text-left align-self-center ">Llist item two</v-list-item-title>
        </v-list-item>
        <v-list-item link  active-class="bg-primary primary--text">
          <v-list-item-icon>
          <v-icon color="white">mdi-solid</v-icon>
          
          </v-list-item-icon>
          <v-list-item-title class=" white--text text-left align-self-center ">List item three</v-list-item-title>
        </v-list-item>
        <v-list-item link  active-class="bg-primary primary--text">
          <v-list-item-icon>
          <v-icon color="white">mdi-solid</v-icon>
          
          </v-list-item-icon>
          <v-list-item-title class=" white--text text-left align-self-center ">List item four</v-list-item-title>
        </v-list-item>
         <v-list-item link  active-class="bg-primary primary--text">
          <v-list-item-icon>
          <v-icon color="white">mdi-solid</v-icon>
          
          </v-list-item-icon>
          <v-list-item-title class=" white--text text-left align-self-center ">List item five</v-list-item-title>
        </v-list-item>
         
        <v-list-item link  active-class="bg-primary primary--text" @click="logout">
          <v-list-item-icon>
            <v-icon  color="white">mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title class=" white--text text-left align-self-center ">Logout</v-list-item-title>
        </v-list-item>
       
      </v-list>
    </v-navigation-drawer>

    <div class="main-panel">
      <top-navbar class="" @toggle="toggle = !toggle"></top-navbar>

      <dashboard-content></dashboard-content>

      <!-- <content-footer></content-footer> -->
    </div>

    <v-dialog v-model="userModal" max-width="500">
      <v-card class="card-shadow">
        <v-card-text>
          <div class="d-flex justify-space-between pt-5 pb-3">
            <h2 class="primary--text">U</h2>
            <v-icon @click="userModal = !userModal">mdi-close</v-icon>
          </div>
          <v-divider></v-divider>
          <v-row class="mt-5">
            <v-col cols="12" class="d-flex align-items-center">
              <!-- <v-avatar size="100" v-if="getLoggedUser().photoURL">
                <v-img :src="getLoggedUser().photoURL"></v-img>
              </v-avatar> -->

              <div class="pl-3">
                
              </div>
            </v-col>
            <v-col cols="12">
              <h3 class="mb-3">D</h3>
              <v-divider></v-divider>
            </v-col>
          
           
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import DashboardContent from "../components/Content.vue";
export default {
  components: {
    DashboardContent,
  },
 
  data() {
    return {
      toggle: true,
      userModal: false,
    };
  },
  methods:{
    logout(){
      // localStorage.removeItem("current_user");
      localStorage.clear();

      this.$router.push({ path:"/"});
    }
  }
};
</script>

<style scoped>
.sidebar ::-webkit-scrollbar {
  width: 8px;
}

/* Track */
.sidebar ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
.sidebar ::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 10px;
}

/* Handle on hover */
.sidebar ::-webkit-scrollbar-thumb:hover {
  background: rgb(143, 142, 142); 
}
.background{
  background-color: #950014;
}
</style>