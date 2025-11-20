import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import {
  dependencies,
  devDependencies,
} from '../../package.json';

export default defineConfig({
  source: {
    entry: {
      index: './src/index.tsx',
    },
  },
  plugins: [
    pluginReact(),
    pluginSass(),
    pluginModuleFederation({
      name: 'creator',
      exposes: {
        './Creator': './src/app/app.tsx',
      },
      filename: 'remoteEntry.js',
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion:
            dependencies['react-dom'],
        },
      },
    }),
  ],
  server: {
    port: 8081,
  },
});
