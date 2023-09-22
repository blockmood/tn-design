import { PREFIX_CLS } from "./constants";
import { ConfigProviderProps } from './type'

export const defaultConfigProviderProps: ConfigProviderProps = {
  prefixCls: PREFIX_CLS,
  getPrefixCls:(componentName, customPrefix) => `${customPrefix || defaultConfigProviderProps.prefixCls}-${componentName}`
}
