import React from 'react';

export const IconButton = ({ children, className = '' }: React.PropsWithChildren<{className?: string}>) => <div className={`iconbutton ${className}`}>{children}</div>;
