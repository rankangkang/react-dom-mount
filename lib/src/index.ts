import * as React from 'react';
import * as v17 from './v17'
import * as v18 from './v18'

const getVersion = (versionStr: string) => {
  const vers = versionStr.split('.') || [];
  const [ver] = vers;
  return Number(ver);
};

let mount
let unmount

const reactVersion = getVersion(React.version);
if (reactVersion < 18) {
  mount = v17.mount
  unmount = v17.unmount
} else {
  mount = v18.mount
  unmount = v18.unmount
}

export type { Unmount } from './common'

export {
  mount,
  unmount
}

export default {
  mount: mount,
  unmount: unmount
}