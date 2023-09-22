
import { useMemo } from 'react';
import { ButtonProps } from '../type'
import cs from 'classnames';

interface getClassNamesProps {
  type: ButtonProps['type'];
  disabled: ButtonProps['disabled'];
  className: ButtonProps['className'];
  loading: ButtonProps['loading'];
  prefixCls: string;
}

export const useClassNames = (props: getClassNamesProps) => {
  const { type, disabled, className, loading, prefixCls } = props;

  return useMemo(() => {
    return {
      wrapperCls: cs(
        `${prefixCls}`,
        `${type ? `${prefixCls}-${type}` : ''}`,
        {
          [`${prefixCls}-disabled`]: disabled,
          [`${prefixCls}-loading`]: loading,
        },
      className
      )
    }
  },[type, disabled, className])
}
