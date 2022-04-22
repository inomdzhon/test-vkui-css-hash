module.exports = ({ selectors }) => ({
  postcssPlugin: "postcss-wrap-to-global",
  Rule: (rule) => {
    if (selectors.includes(rule.selector)) {
      rule.selector = `:global(${rule.selector})`;
    }
  },
});
module.exports.postcss = true;
