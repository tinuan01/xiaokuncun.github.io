import App from './App'
import { createSSRApp } from 'vue'
import titles from '@/components/custom-title.vue' 

export function createApp() {
    const app = createSSRApp(App)
    app.component('titles',titles)
	
    return {
        app
    }
}