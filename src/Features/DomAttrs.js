import React from 'react';

export default function DomAttrs() {
  return (
    <div
      somethingCustom="This is a warning"
      somethingelsecustom="this is not a warning"
      somethingElse={123}
      onNothing="I'm ignored for security reasons"
      obj={{a: 123}}
      func={() => {}}
      nothing={0/0}
    >
      I have all sorts of interesting stuff, check it out in the inspector.
    </div>
  );
}
