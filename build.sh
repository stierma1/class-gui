
./node_modules/babel-cli/bin/babel.js src --out-dir ./dist
./node_modules/babel-cli/bin/babel.js test --out-dir ./built-tests
node ./node_modules/webpack/bin/webpack
node ./node_modules/webpack/bin/webpack --config webpack.test.config.js
