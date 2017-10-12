import React from 'react';
import './DomAttrs.css';

export default function DomAttrs() {
  return (
    <ul>
      <li somethingCustom="This is a warning">
        If you check the console, you'll see an error, since react wants custom names set not using camelCase,
        it should have a property called <pre>somethingCustom</pre>.
      </li>
      <li somethingcustom="this is not a warning">
        This li will not fire a warning, because the proprty is named <pre>somethingcustom</pre>. Note the lack of capitals in the property.
      </li>
      <li somethingelse={123}>If you pass numbers, they will appear as strings.</li>
      <li onnothing={() => {}}>Even if you follow the naming convention, starting property names with <pre>on</pre> will throw a warning. Here we tried to have <pre>onnothing</pre>, but React doesn't like that.</li>
      <li onNothing="This won't render either">This remains true, even if you don't pass a function</li>
      <li func={() => {}}>Moreover, you can't actually pass functions at all.</li>
      <li obj={{a: 123}}>You can pass an object and it will be respected, but it won't do you much good, since it will render as <pre>[object Object]</pre></li>
      <li nothing={0/0}>It will give you <pre>NaN</pre> if you try to, though!</li>
    </ul>
  );
}
