import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleToggleModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };

  const onClose = () => {
    setShowModalPopup(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          id={"custom_id"}
          footer={<h2>Customized Footer</h2>}
          header={<h1>Customized Header</h1>}
          onClose={onClose}
          body={<div>Customized Body</div>}
        />
      )}
    </div>
  );
}
