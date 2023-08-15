import * as React from 'react';
import type { Mount } from './common';

const getVersion = (versionStr: string) => {
  const vers = versionStr.split('.') || [];
  const [ver] = vers;
  return Number(ver);
};

let mount: Mount = () => {
  console.warn('React-Dom-Mount has not been initialized, please do not call it directly after importing.');
  console.warn(`
// ❌ moudle has not been initialized, don not call like this
import { mount } from 'react-dom-mount'
mount(el)
  `);
  console.warn(`
import { mount } from 'react-dom-mount'
function App() {
  // ...
  return (
    // ✅️ moudle initialized, you call it.
    <button onClick={() => {
      mount(el)
    }}>click</button>
  )
}

// or call it in next eventloop
setTimeout(() => {
  // ✅️ moudle initialized, you can call it
  mount(el)
}, 3000)
  `);
  return () => {
    console.warn('React-Dom-Mount has not been initialized, please do not call it directly after importing.');
  };
};

const reactVersion = getVersion(React.version);
if (reactVersion < 18) {
  (async () => {
    ({ mount } = await import('./v17'));
  })();
} else {
  (async () => {
    ({ mount } = await import('./v18'));
  })();
}

export type { Unmount } from './common';

export { mount };

export default { mount };
