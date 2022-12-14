import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/vuetify.js'

const app = createApp(App)
app.$hostname = process.env.API_URL || 'http://localhost:8080/api'
// URL to pull block information from
//app.$block_explorer = window.location.protocol + '//' + window.location.hostname + ':4001' // no trailing slash
app.$block_explorer = 'https://blockchain-demo.instamed.com:8443'

app.$channel_id = 'ch1'

app.$provider_id = 'resource:org.fhir.core.Organization#XYZ_Provider'

app.$payer_id = 'resource:org.fhir.core.Organization#ABC_Healthcare'

// Can be toggled to use reuse a single patient id, which makes the demo run faster, or it can create a patient each time
app.$patient_id = 'resource:org.fhir.core.Patient#1'
app.$create_patients = true

app.config.productionTip = false
app.use(router)

app.mount('#app')
export default app