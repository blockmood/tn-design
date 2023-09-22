import { useMemo } from "react";
import { baseAlertProps } from '../component/Alert';
import cs from 'classnames'

type getClassNamesProps = {
  type?: baseAlertProps['type'];
  prefixCls:string;
  className?: string;
}


export const useClassNames = (props: getClassNamesProps) => {
  const { type, prefixCls } = props;
  return useMemo(() => {
    return {
      wrapperCls: cs(
        `${prefixCls}`,
        `${ type ? `${prefixCls}-${type}` : '' }`
      )
    }
  }, [type, prefixCls])
}
