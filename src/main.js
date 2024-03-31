import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";


const app = createApp(App).use(Particles, {
    init: async engine => {
      
      await loadSlim(engine); 
    },
  });

app.use(router)

app.mount('#app')