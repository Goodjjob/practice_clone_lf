import React, { DetailedHTMLProps, HTMLAttributes } from "react";

interface CardProps {
  className: string;
  children: JSX.Element[];
}
export default function Card(
  props: CardProps & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
)
: JSX.Element {
  const { className, children, ...rest } = props;

  return (
    <div
      className={className}
      {...rest}
    >
      {children}
    </div>
  );
};