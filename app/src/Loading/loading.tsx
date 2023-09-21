import React from 'react'
import './style/'
import { AiOutlineLoading } from 'react-icons/ai'
import { LoadingProps } from './type'

const Loading = (props: LoadingProps) => {
  const { style } = props;
  return <span className='tn-loading' style={style}><AiOutlineLoading /></span>
}

export { Loading }
