import { Modal } from "antd";

export default function MyModal(props: { destroy?: () => void }) {
  return <Modal title="hello world" open onOk={props.destroy} onCancel={props.destroy}>
    <h1>hello world</h1>
  </Modal>
}