import love from 'eslint-config-love'

export default [
    {
        ...love,
        files: ['**/*.js', '**/*.ts'],
        
        rules: {
            ...love.rules,
            "@typescript-eslint/explicit-function-return-type": "error",
            "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        }   
    },
    {
        ignores: [
            'eslint.config.js',
            'dist/'
        ]
    },
]