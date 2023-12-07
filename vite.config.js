export default {
  esbuild: {
    loader: 'tsx',
    include: /src\/components\/.*\.ts.$/,
    exclude: [],
    target: 'es2017',
  },
  moduleResolution: 'bundler',
};
