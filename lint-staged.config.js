// eslint-disable-next-line @typescript-eslint/no-require-imports
const { ESLint } = require("eslint");

const removeIgnoredFiles = async (files) => {
  const eslint = new ESLint();
  const ignoredFiles = await Promise.all(files.map((file) => eslint.isPathIgnored(file)));
  const filteredFiles = files.filter((_, i) => !ignoredFiles[i]);
  return filteredFiles.join(" ");
};

module.exports = {
  "*.{js,jsx,ts,tsx}": async (files) => {
    const filesToLint = await removeIgnoredFiles(files);
    return [
      `eslint ${filesToLint} --max-warnings 0 --config ./.eslintrc.json`,
      `eslint ${filesToLint} --fix --config ./.eslintrc.json`,
      `prettier ${filesToLint} --write --config ./.prettierrc`,
    ];
  },
};
