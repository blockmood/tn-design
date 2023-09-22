import { createContext } from 'react';
import { defaultConfigProviderProps } from './context';
import { ConfigProviderProps } from './type';

export const ConfigContent = createContext<ConfigProviderProps>(defaultConfigProviderProps)
