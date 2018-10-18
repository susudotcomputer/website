import React from 'react';

// Paragraphs
export const Para = ({ children }) => (
  <p className="fz18px lh4 font-serif mb4">{children}</p>
);

export const Strong = ({ children }) => (
  <strong className="fz18px lh4 font-serif font-bold">{children}</strong>
);

// Headings
export const H1 = ({ children }) => (
  <h1 className="fz20px font-mono font-bold mb1">{children}</h1>
);
export const H2 = ({ children }) => (
  <h2 className="fz18px font-mono font-bold mb1">{children}</h2>
);
export const H3 = ({ children }) => (
  <h3 className="fz16px font-mono font-bold mb1">{children}</h3>
);
export const H4 = ({ children }) => (
  <h4 className="fz16px font-mono font-bold mb1">{children}</h4>
);
export const H5 = ({ children }) => (
  <h5 className="fz16px font-mono font-bold mb1">{children}</h5>
);
export const H6 = ({ children }) => (
  <h6 className="fz16px font-mono font-bold mb1">{children}</h6>
);
export const Link = ({ children }) => (
  <a className="black hover-black_50 text-underline">{children}</a>
);

// Lists
export const UnorderedList = ({ children }) => (
  <ul className="mb4">{children}</ul>
);
export const ListItem = ({ children }) => (
  <li className="fz18px lh4 font-serif">{children}</li>
);

// Code
export const Code = ({ children }) => (
  <pre className="border-pink bg-pink_10 pink border p2 fz15px lh4 mb3">
    {children}
  </pre>
);
export const Inline = ({ children }) => (
  <code className="bg-pink_15 p3px fz18px">{children}</code>
);

export default {
  p: Para,
  strong: Strong,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  a: Link,
  ul: UnorderedList,
  li: ListItem,
  code: Code,
  inlineCode: Inline
};
