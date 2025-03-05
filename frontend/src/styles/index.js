import './main.scss';

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