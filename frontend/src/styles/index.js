// Import des fichiers de style
import './global.scss';
import './variables.scss';
import './main.scss';
import './components.scss';
import './components/header.scss';
import './components/artisanCard.scss';
import './components/categoryCard.scss';
import './components/home-faq.scss';

// Autres imports de style peuvent être ajoutés ici

// Exporter les styles pour une utilisation spécifique si nécessaire
export const styles = {
  variables: require('./variables.scss'),
  global: require('./global.scss'),
  components: require('./components.scss'),
  pages: {
    home: require('./pages/home.scss'),
    artisanDetail: require('./pages/artisan-detail.scss'),
    search: require('./pages/search.scss'),
    contact: require('./pages/contact.scss'),
    about: require('./pages/about.scss')
  }
}; 