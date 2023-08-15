import { Root } from "react-dom/client";

export const rootContainer = document.createElement('div');

document.body.appendChild(rootContainer);
rootContainer.setAttribute('class', 'react-mount-container');

export type Unmount = (() => void) & {
  getRoot: () => Root
};

export type ReactDomMount = (element: JSX.Element, parent?: Element) => Unmount
