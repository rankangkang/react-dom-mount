import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { rootContainer, Unmount } from './types';

export function unmount(node: HTMLElement) {
  node.style.display = 'none';
  unmountComponentAtNode(node);
  if (node && node.parentNode) {
    node.parentNode.removeChild(node);
  }
}

// 挂载节点
export function mount(element: JSX.Element, parent?: Element): Unmount {
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

  render(node, el);
  return () => {
    unmount(el);
  };
}

export default mount;
