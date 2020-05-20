import { createApp } from 'vue';
import { router } from './router';
import App from './App.vue';

window.Prism.plugins.NormalizeWhitespace.setDefaults({
  indent: 0,
  'remove-trailing': true,
  'remove-indent': true,
  'left-trim': true,
  'right-trim': true,
  'remove-initial-line-feed': false,
  'tabs-to-spaces': 2
});

const app = createApp(App);
app.use(router);
app.mount('#app');
