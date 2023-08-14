import * as React from 'react';

const getVersion = (versionStr: string) => {
  const vers = versionStr.split('.') || [];
  const [ver] = vers;
  return Number(ver);
};

let mount;
let unmount;

const reactVersion = getVersion(React.version);
if (reactVersion < 18) {
  (async () => {
    ({ mount, unmount } = await import('./v17'));
  })();
} else {
  (async () => {
    ({ mount, unmount } = await import('./v18'));
  })();
}

export type { Unmount } from './common';

export { mount, unmount };

export default (() => mount)();
