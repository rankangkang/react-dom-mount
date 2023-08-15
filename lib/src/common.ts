export const rootContainer = document.createElement('div');

document.body.appendChild(rootContainer);
rootContainer.setAttribute('class', 'react-mount-container');

export type Unmount = () => void;

export type Mount = (
  // element to mount
  element: JSX.Element,
  // mount container
  parent?: Element
) => Unmount;

export type ReactDomMount = (element: JSX.Element, parent?: Element) => Unmount
