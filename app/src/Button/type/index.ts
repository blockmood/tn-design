import { CSSProperties, ReactNode, MouseEvent, MouseEventHandler } from "react";

export interface ButtonProps {
  type?: 'primary' | 'brand' | 'default';
  disabled?: boolean;
  style?: CSSProperties;
  className?:string;
  children?: ReactNode;
  onClick?: MouseEventHandler;
  loading?:boolean;
  icon?: ReactNode;
}
