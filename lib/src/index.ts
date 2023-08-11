import * as React from 'react';

const getVersion = (versionStr: string) => {
  const vers = versionStr.split('.') || [];
  const [ver] = vers;
  return Number(ver);
};

let reactDom: any;
const reactVersion = getVersion(React.version);
if (reactVersion < 18) {
  (async () => {
    reactDom = await import('react-dom');
  })();
} else {
  (async () => {
    reactDom = await import('react-dom/client');
  })();
}

const rootContainer = document.createElement('div');
document.body.appendChild(rootContainer);
rootContainer.setAttribute('class', 'react-mount-container');

export type Unmount = () => void;

export interface MountReactProps {
  destroy?: Unmount;
}

function unmount(node: HTMLElement) {
  node.style.display = 'none';
  reactDom.unmountComponentAtNode(node);
  if (node && node.parentNode) {
    node.parentNode.removeChild(node);
  }
}

// 挂载节点
export default function mount(element: JSX.Element, parent?: Element): Unmount {
  const container = rootContainer || document.body;
  const el = document.createElement('div');
  container.appendChild(el);

  const node = React.cloneElement(element, {
    destroy: () => unmount(el),
  });

  if (parent) {
    parent.appendChild(el);
  } else {
    rootContainer.appendChild(el);
  }

  if (reactVersion < 18) {
    reactDom.render(node, el);
    return () => {
      unmount(el);
    };
  }

  const root = reactDom.createRoot(el);
  root.render(node);
  return () => {
    unmount(el);
  };
}
