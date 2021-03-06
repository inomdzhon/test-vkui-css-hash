const path = require("path");
const cssCustomProperties = require("postcss-custom-properties");
const scopeRoot = require("./tasks/postcss-scope-root.js");
const cssImport = require("postcss-import");
const autoprefixer = require("autoprefixer");
const cssModules = require("postcss-modules");
const csso = require("postcss-csso");
const checkKeyframes = require("./tasks/postcss-check-keyframes");
const wrapToGlobal = require("./tasks/postcss-wrap-to-global");
const { defaultSchemeId } = require("./package.json");
const VkSansMandatoryDeclarations = require("./postcss-plugin-vk-sans");
const { generateScopedName } = require("./constants");

const animationsSource = path.join(__dirname, "src/styles/animations.css");
const cssPropSources = [
  path.join(
    __dirname,
    "node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariables.css"
  ),
  path.join(__dirname, "src/styles/bright_light.css"),
  path.join(__dirname, "src/styles/constants.css"),
  animationsSource,
];

let plugins = [
  cssImport(),
  checkKeyframes({
    importFrom: animationsSource,
  }),
  cssCustomProperties({
    importFrom: cssPropSources,
    preserve: true,
  }),
  wrapToGlobal({
    selectors: [".vkui--vkBase--dark", ".vkui--vkIOS--light", ".vkui--vkIOS--dark", ".vkui--vkCom--light", ".vkui--vkCom--dark"],
  }),
  // postcss-custom-properties only works with :root
  scopeRoot({
    customPropRoot: ":global(.vkui__root), :global(.vkui__portal-root)",
    except: [
      path.resolve(`./src/styles/${defaultSchemeId}.css`),
      path.resolve(
        "./node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariables.css"
      ),
    ],
  }),
  autoprefixer(),
  cssModules({
    generateScopedName: generateScopedName,
    getJSON: () => void 0,
  }),
  // eslint-disable-next-line new-cap
  VkSansMandatoryDeclarations({
    platform: "vkui",
    debug: false,
    ignoreFiles: [],
    ignoreSelectors: [],
    explicitNormalLetterSpacing: false,
    respectImportant: true,
    features: {
      injectLetterSpacing: true,
      injectVkSansDisplay: true,
      overrideToVkSansDisplay: true,
      overrideCustomFonts: true,
    },
    varName: "--font-display",
    customPropertiesFiles: [
      path.resolve(
        "./node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/index.css"
      ),
    ],
  }),
];

if (process.env.NODE_ENV === "production") {
  plugins.push(csso({ restructure: false }));
}

module.exports = { plugins, cssPropSources };
