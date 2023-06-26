import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(faPhone, faGlobe, faShieldHalved, faComments, faLinkedin, faGithub, faInstagramSquare)

const app = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
