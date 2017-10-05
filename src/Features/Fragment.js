import React from 'react';

export default function Fragment() {
  return [
    <dt key="term-1">This is a detail list</dt>,
    <dd key="term-1-1">These were previously an enormous pain in the butt to render</dd>,
    <dt key="term-2">BECAUSE</dt>,
    <dd key="term-2-1">They don't like having intermediate dom nodes involved</dd>,
    <dd key="term-2-2">Everything in these is a sibling</dd>,
    <dt key="term-3">Fragments</dt>,
    <dd key="term-3-1">They are Array return values of render functions</dd>
  ];
}
