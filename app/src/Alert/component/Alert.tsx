import { ConfigContent } from '@tn-design/ConfigProvider/configProvider';
import React, { CSSProperties, ReactNode, useContext } from 'react';
import { useClassNames } from '../hooks';
import { AiFillInfoCircle } from 'react-icons/ai';

import '../style/index'

export interface baseAlertProps {
  type: 'info | warning | error | loading';
  content?:ReactNode;
  className?:string;
  style?: CSSProperties;
  icon?:ReactNode;
  showIcon?:boolean;
}

export const Alert = (props:baseAlertProps) => {
  const { type, className, style, content, icon, showIcon = true } = props
  const { getPrefixCls } = useContext(ConfigContent);
  const prefixCls = getPrefixCls('alert');
  const { wrapperCls } = useClassNames({
    prefixCls: prefixCls,
    type:type,
    className: className
  })

  const innerIconContent = showIcon ? <div className={`${prefixCls}-left`}>{(icon ? icon : <AiFillInfoCircle />)}</div> : null

  return <div className={wrapperCls} style={style}>
    {innerIconContent}
    <div className={`${prefixCls}-right`}>{content}</div>
  </div>
}
