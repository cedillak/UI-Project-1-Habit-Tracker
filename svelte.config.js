import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
//import sveltePreprocess from 'svelte-preprocess'
import * as sass from 'sass'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess({
    sass: {
      sync: true,
      implementation: sass,
    },
  })
}

