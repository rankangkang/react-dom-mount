export const rootContainer = document.createElement('div');

document.body.appendChild(rootContainer);
rootContainer.setAttribute('class', 'react-mount-container');

export type Unmount = () => void;

export type ReactDomMount = (element: JSX.Element, parent?: Element) => Unmount
