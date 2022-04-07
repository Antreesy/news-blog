import "./dialog.scss";

const Dialog = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal__scrollContainer">
        <div className="dialog modal__dialog">{children}</div>
      </div>
    </div>
  );
};

export { Dialog };
