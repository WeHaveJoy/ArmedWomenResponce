import './style.css'
// import './semantic'
import './bootstrap.min.css'
import javascriptLogo from './javascript.svg'
import flatpickr from "flatpickr";
import './app'

import Alpine from 'alpinejs'
import './checkpulse_screen'
import './counseling_screen'
import './makebooking'
import './notifications'
import './safety_screen'
import Responded from './app'

window.Alpine = Alpine
// Alpine.plugin(persist)
Alpine.data('safetyawareness', Responded)
Alpine.start()





