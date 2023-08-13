# react-dom-mount

This package allows you to mount elements (like antd Modal) to dom through react-dom.

## installation

```shell
npm install react-dom-mount
```

## usage

```js
// after mount modal to dom, press ok/cancel button to remove it.
const destroy = mount(
  <Modal title="hello world" open onOk={() => destroy()} onCancel={() => destroy()}>
    <h1>hello world</h1>
  </Modal>
)
```
