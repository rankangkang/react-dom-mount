# react-dom-mount

This package allows you to mount elements (like antd Modal) to dom through react-dom.

## installation

```shell
npm install react-dom-mount
```

## usage

```js
const destroy = mount(
  // the element need to mount，required
  element,
  // the container that element were mounted to, optional. if not passed, element will be mount to default container
  parent,
)

// call the return value to unmount element
destroy()
```

Here's how to use it.

```js
import { Button, Modal } from 'antd';
import mount from 'react-dom-mount';

function App() {
  return (
    <>
      <h1>React-Dom-Mount</h1>
      <Button
        type='primary'
        onClick={() => {
          // after mount modal to dom, press ok/cancel button to remove it.
          const destroy = mount(
            <Modal title="hello world" open onOk={() => destroy()} onCancel={() => destroy()}>
              <h1>hello world</h1>
            </Modal>
          )
        }}
      >
        click to open modal
      </Button>
    </>
  );
}

```
> The APIs exported by react-dom v18 are different from v17 (or earlier), and we have made them compatible.
