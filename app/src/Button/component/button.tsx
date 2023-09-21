import React, { forwardRef, MouseEventHandler, ReactNode } from 'react';
import { ButtonProps } from '../type';
import '../style/index';
import { useClassNames } from '../hooks'
import { Loading } from '@tn-design/Loading';

const Button = (baseProps: ButtonProps, ref: any) => {
  const { type = 'default', children, onClick, className, style, disabled, loading, icon } = baseProps

  const { wrapperCls } = useClassNames({
    type:type,
    className: className,
    disabled:disabled,
    loading: loading
  })

  const handleClick:MouseEventHandler = (event) => {
    if(loading || disabled){
      event.preventDefault();
      return
    }
    onClick?.(event);
  }

  const iconNode = loading && icon ? icon :  ( loading ? <Loading style={{fontSize:14}} /> : null );

  const innerContent: ReactNode = (
    <>
      {iconNode}
      {React.Children.map(children, (child) => typeof child ==='string' ? <span>{child}</span> : child)}
    </>
  )

  return <button style={style} className={wrapperCls} onClick={handleClick}>{innerContent}</button>
}

const ForwardRefButton = forwardRef<unknown, ButtonProps>(Button);

export { ForwardRefButton as Button }
