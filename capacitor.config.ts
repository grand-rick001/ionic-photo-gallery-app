import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'grand-rick',
  appName: 'Rick and Morty Photo Gallery',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
};

export default config;
