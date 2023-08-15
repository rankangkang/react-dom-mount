import * as React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { rootContainer, Unmount } from './types'

export function unmount(root: Root, node: HTMLElement) {
  node.style.display = 'none';
  root.unmount()
  if (node && node.parentNode) {
    node.parentNode.removeChild(node);
  }
}

// 挂载节点
export function mount(element: JSX.Element, parent?: Element): Unmount {
  const container = rootContainer || document.body;
  const el = document.createElement('div');
  container.appendChild(el);

  const root = createRoot(el);
  const destroy = (() => unmount(root, el)) as Unmount;
  destroy.getRoot = () => root

  const node = React.cloneElement(element, {
    destroy,
  });

  if (parent) {
    parent.appendChild(el);
  } else {
    rootContainer.appendChild(el);
  }

  root.render(node);

  return destroy;
}

export default mount
