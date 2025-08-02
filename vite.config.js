import { defineConfig } from 'vite';

export default defineConfig({
  // C'est crucial pour les sites de projet GitHub Pages
  // Le nom de votre dépôt GitHub est 'faynalytics'
  base: '/faynalytics/', 
  build: {
    outDir: 'dist', // Dossier de sortie par défaut pour Vite
  },
});