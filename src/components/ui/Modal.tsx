import React from 'react';

export const Modal = ({ children, className = '' }: React.PropsWithChildren<{className?: string}>) => <div className={`modal ${className}`}>{children}</div>;
