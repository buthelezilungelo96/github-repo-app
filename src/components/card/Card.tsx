import React from 'react';

const prefix = 'card';

export interface CardAttribute extends React.HTMLAttributes<HTMLDivElement> {
  bordered?: boolean;
}

export interface CardBodyAttribute extends React.HTMLAttributes<HTMLDivElement> {}

export const CardBody: React.FunctionComponent<CardBodyAttribute> = ({
  className,
  children,
  ...props
}) => {
  const classes = [`${prefix}-body`];
  if (className) {
    classes.push(className);
  }
  return (
    <div {...props} className={classes.join(' ')}>
      {children}
    </div>
  );
};
