import React from 'react';

export const Textarea = ({ children, className = '' }: React.PropsWithChildren<{className?: string}>) => <div className={`textarea ${className}`}>{children}</div>;
