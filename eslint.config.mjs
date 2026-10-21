import nextVitals from 'eslint-config-next/core-web-vitals'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

// ESLint flat config: Next.js core web vitals rules, Prettier violations as
// errors.
const eslintConfig = [
  ...nextVitals,
  prettierRecommended,
  { ignores: ['tailwind.config.js', 'next.config.js'] },
]

export default eslintConfig
