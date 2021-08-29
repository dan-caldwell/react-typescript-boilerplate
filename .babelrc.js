const path = require('path');

const plugins = [
    [
        require.resolve('babel-plugin-module-resolver'),
        {
            root: ["."],
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
                '@src': path.resolve(__dirname, 'src'),
                '@styles': path.resolve(__dirname, 'src/styles'),
                '@hooks': path.resolve(__dirname, 'src/hooks'),
                '@types': path.resolve(__dirname, 'types.ts'),
                '@ExampleContext': path.resolve(__dirname, 'src/context/ExampleContext.tsx')
            }
        }
    ]
];

module.exports = {
    plugins: [...plugins]
}