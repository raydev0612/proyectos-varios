/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal_content">
        <div className="header">
          <span onClick={onClose} className="close_modal_icon">
            &times;
          </span>
          <h3>{header ? header : "Header"}</h3>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>Este es el cuerpo del modal</p>
            </div>
          )}
        </div>
        <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  );
}
