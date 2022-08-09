import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import fr from 'vuetify/lib/locale/fr';
Vue.use(Vuetify);


export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#F57C00',
        secondary: '#131519',
        texte: '#7a7a7a',
        titre: '#252B7F',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
      dark: {
        primary: '#d51b80',
        secondary: '#131519',
        texte: '#7a7a7a',
        titre: '#252B7F',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
  lang: {
    locales: { fr },
    current: 'fr',
  },
  icons: {
    iconfont: 'mdi', 
  },
});