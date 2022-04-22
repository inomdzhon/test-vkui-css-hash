import "./lib/polyfills";

import "./styles/constants.css";
import "./styles/animations.css";
import "./styles/common.css";

/**
 * Blocks
 */
export { ButtonGroup } from "./components/ButtonGroup/ButtonGroup";
export type { ButtonGroupProps } from "./components/ButtonGroup/ButtonGroup";
export { Button } from "./components/Button/Button";
export type { ButtonProps } from "./components/Button/Button";
export { default as Spinner } from "./components/Spinner/Spinner";
export type { SpinnerProps } from "./components/Spinner/Spinner";

/**
 * Helpers
 */
export { Div } from "./components/Div/Div";
export type { DivProps } from "./components/Div/Div";
export { default as Tappable } from "./components/Tappable/Tappable";
export type { TappableProps } from "./components/Tappable/Tappable";
export { Touch } from "./components/Touch/Touch";
export type { TouchProps } from "./components/Touch/Touch";

/**
 * Wrappers
 */
export { AppRoot } from "./components/AppRoot/AppRoot";
export type { AppRootProps } from "./components/AppRoot/AppRoot";
export { AdaptivityProvider } from "./components/AdaptivityProvider/AdaptivityProvider";
export { default as ConfigProvider } from "./components/ConfigProvider/ConfigProvider";
export type { ConfigProviderProps } from "./components/ConfigProvider/ConfigProvider";
export {
  ConfigProviderContext,
  WebviewType,
} from "./components/ConfigProvider/ConfigProviderContext";
export { AppearanceProvider } from "./components/AppearanceProvider/AppearanceProvider";
export type { AppearanceProviderProps } from "./components/AppearanceProvider/AppearanceProvider";
export { Scheme, Appearance } from "./helpers/scheme";
export { LocaleProviderContext } from "./components/LocaleProviderContext/LocaleProviderContext";

/**
 * Typography
 */
export { Title } from "./components/Typography/Title/Title";
export type { TitleProps } from "./components/Typography/Title/Title";
export { default as Headline } from "./components/Typography/Headline/Headline";
export type { HeadlineProps } from "./components/Typography/Headline/Headline";
export { Text } from "./components/Typography/Text/Text";
export type { TextProps } from "./components/Typography/Text/Text";
export { Caption } from "./components/Typography/Caption/Caption";
export type { CaptionProps } from "./components/Typography/Caption/Caption";
export { Subhead } from "./components/Typography/Subhead/Subhead";
export type { SubheadProps } from "./components/Typography/Subhead/Subhead";
export { Paragraph } from "./components/Typography/Paragraph/Paragraph";
export type { ParagraphProps } from "./components/Typography/Paragraph/Paragraph";

/**
 * HOCs
 */
export { withInsets } from "./hoc/withInsets";
export { withPlatform } from "./hoc/withPlatform";
export { withAdaptivity } from "./hoc/withAdaptivity";

/**
 * Hooks
 */
export { useInsets } from "./hooks/useInsets";
export { usePlatform } from "./hooks/usePlatform";
export { useAdaptivity } from "./hooks/useAdaptivity";
export { useAppearance } from "./hooks/useAppearance";
export { usePagination } from "./hooks/usePagination";

/**
 * Utils
 */
export { classNamesString as classNames } from "./lib/classNames";
export { default as animate } from "./lib/animate";
export { removeObjectKeys } from "./lib/removeObjectKeys";
export { SSRWrapper } from "./lib/SSR";
export type { SSRWrapperProps } from "./lib/SSR";
export {
  platform,
  ANDROID,
  IOS,
  VKCOM,
  Platform,
  IS_PLATFORM_ANDROID,
  IS_PLATFORM_IOS,
} from "./lib/platform";
export { getClassName } from "./helpers/getClassName";
export { calcInitialsAvatarColor } from "./helpers/avatar";

/**
 * Types
 */
export type { AlignType, HasPlatform, HasInsets } from "./types";
export type { NavIdProps } from "./lib/getNavId";
export type { PlatformType } from "./lib/platform";
export type { AdaptivityProps } from "./hoc/withAdaptivity";
