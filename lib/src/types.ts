export const rootContainer = document.createElement('div');

export const REACT_DOM_MOUNT_CONTAINER_ID = 'react-dom-mount-container';
// export const REACT_DOM_MOUNT_ITEM_CLASSNAME = 'react-dom-mount-item'

document.body.appendChild(rootContainer);
rootContainer.setAttribute('id', REACT_DOM_MOUNT_CONTAINER_ID);

export type Unmount = () => void;

export type ReactDomMount = (element: JSX.Element, parent?: Element) => Unmount;
