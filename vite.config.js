import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Remplacez "nom-du-depot" par le nom de votre dépôt GitHub
});
