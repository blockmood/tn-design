import React, { useContext } from 'react'
import './style/'
import { AiOutlineLoading } from 'react-icons/ai'
import { LoadingProps } from './type'
import { ConfigContent } from '@tn-design/ConfigProvider/configProvider'
import { useClassNames } from '@tn-design/Button/hooks'

const Loading = (props: LoadingProps) => {
  const { getPrefixCls } = useContext(ConfigContent)
  const { style } = props;
  return <span className={getPrefixCls('loading')} style={style}><AiOutlineLoading /></span>
}

export { Loading }
