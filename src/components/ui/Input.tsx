import React from 'react';

export const Input = ({ children, className = '' }: React.PropsWithChildren<{className?: string}>) => <div className={`input ${className}`}>{children}</div>;
