// eslint-disable-next-line no-undef
module.exports = {
  "**/*.{js,jsx,ts,tsx}": ["npx eslint --fix", "prettier --write"],
  "**/*.ts?(x)": () => "tsc --noEmit -p tsconfig.json",
  "{*.json,.huskyrc,.prettierrc,.lintstagedrc,.eslintrc}": [
    "prettier --write --parser json --config .prettierrc",
  ],
};
