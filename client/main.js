import './style.css'
import './semantic.css'
import './bootstrap.min.css'
import javascriptLogo from './javascript.svg'
import flatpickr from "flatpickr";

import Alpine from 'alpinejs'
import './checkpulse_screen'
import './counseling_screen'
import './makebooking'
import './notifications'
import './safety_screen'

window.Alpine = Alpine
Alpine.plugin(persist)
Alpine.data('safetyawareness',Responded)
Alpine.start()




