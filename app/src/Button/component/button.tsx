import React, { forwardRef, MouseEventHandler, ReactNode } from 'react';
import { ButtonProps } from '../type';
import '../style/index';
import { useClassNames } from '../hooks'

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

  const iconNode = loading ? <span>loading...</span> : icon;

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
