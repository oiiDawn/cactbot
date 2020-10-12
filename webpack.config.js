'use strict';

const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'none',
  entry: {
    config: './ui/config/config.js',
    rdmty: './ui/dps/rdmty/dps.js',
    xephero: './ui/dps/xephero/xephero.js',
    eureka: './ui/eureka/eureka.js',
    fisher: './ui/fisher/fisher.js',
    jobs: './ui/jobs/jobs.js',
    oopsyraidsy: './ui/oopsyraidsy/oopsyraidsy.js',
    pullcounter: './ui/pullcounter/pullcounter.js',
    radar: './ui/radar/radar.js',
    raidboss: './ui/raidboss/raidboss.js',
    raidemulator: './ui/raidboss/raidemulator.js',
    test: './ui/test/test.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: { writeToDisk: true },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /data[\\\/]manifest\.txt$/,
        use: [
          {
            loader: './webpack/loaders/manifest-loader.js',
          },
        ],
      },
      {
        test: /data[\\\/].*\.js$/,
        // TODO: add uglifier here
        use: ['raw-loader'],
      },
      {
        test: /data[\\\/](?!manifest\.txt).*\.txt$/,
        // TODO: we could also strip comments and blank lines from timelines
        use: ['raw-loader'],
      },
    ],
  },
};
