module.exports = {
  'parser': '@typescript-eslint/parser',
  'plugins': ['@typescript-eslint'],
  'rules': {
    'no-console': 'off',
    'no-debugger': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'prefer-const': 2, // 首选常量（let 没有被赋值 使用 const）
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }], // 使用 ===
    'comma-style': [2, 'last'], // 控制逗号在行尾出现还是在行首出现
    'comma-dangle': [2, 'never'], // 多行模式必须带逗号，单行模式不能带逗号
    'comma-spacing': [2, { 'before': false, 'after': true }], // 控制逗号前后的空格
    'space-before-function-paren': [2, 'never'], // 函数与()间禁止使用空格
    'semi': [2, 'never'], // 要求或禁止使用分号代替 ASI
    'no-trailing-spaces': 2, // 禁止行尾出现空格
    'space-in-parens': [2, 'never'], // 禁止使用括号内的空格
    'semi-spacing': [2, { // 禁止或强制使用分号周围的空格 例如 const a = 1 ; const b = 2，自动调整为 const a = 1; const b = 2
      'before': false,
      'after': true
    }],
    'indent': [2, 2, { // 强制缩进一致
      'SwitchCase': 1
    }],
    'object-curly-spacing': [2, 'always', { // 在大括号内强制保持一致的间距
      objectsInObjects: false
    }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    "no-multi-spaces": 2, // 不能用多余的空格
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }]
  },
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'modules': true
    }
  }
}