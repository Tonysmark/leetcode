import webpack, { Configuration } from 'webpack';

import path from 'path';

const config: Configuration = {
    entry: path.resolve(__dirname) + 'src/main.ts',
};

module.exports = config;
