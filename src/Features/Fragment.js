import React from 'react';

export default function Fragment() {
  return [
    <dt key="term-1">This is a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl" target="_blank" rel="noopener noreferrer">Detail List</a></dt>,
    <dd key="term-1-1">These were previously an enormous pain to render in react</dd>,
    <dd key="term-2-1">They don't like having intermediate dom nodes involved</dd>,
    <dd key="term-2-2">Everything in these is a sibling</dd>,
    <dt key="term-3"><a href="https://reactjs.org/blog/2017/09/26/react-v16.0.html#new-render-return-types-fragments-and-strings" target="_blank" rel="noopener noreferrer">Fragments</a></dt>,
    <dd key="term-3-1">Fragments are a new feature in React 16, that add new options for what can be returned from the <pre>render</pre> method</dd>,
    <dd key="term-3-2">You can now return React elements (duh), strings, numbers, Portals (see below), null, and booleans.</dd>
  ];
}
