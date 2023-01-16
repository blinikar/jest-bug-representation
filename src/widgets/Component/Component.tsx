import React, { FC } from 'react';
import { getTextFromProps } from './logic';

interface ComponentProps {
  text: string;
}

export const Component: FC<ComponentProps> = ({text}) => {
  return <h1>{getTextFromProps(text)}</h1>
}