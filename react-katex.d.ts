declare module 'react-katex' {
  import { ComponentType } from 'react';

  export interface KatexProps {
    math?: string;
    children?: string;
    errorColor?: string;
    renderError?: (error: Error) => React.ReactNode;
  }

  export const BlockMath: ComponentType<KatexProps>;
  export const InlineMath: ComponentType<KatexProps>;
}
