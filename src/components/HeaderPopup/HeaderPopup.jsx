import "./HeaderPopup.css";
import closeButton from "../../assets/close.svg";

export default function HeaderPopup(props) {
  return (
    <div
      className={`modal header-modal modal_type_header ${
        props.activeModal === "header" && "header-modal_active"
      }`}
    >
      <div
        className={`header-modal__container ${
          props.activeModal === "header" && "header-modal__container_active"
        }`}
      >
        <div className="header-modal__header">
          <h2 className={`header__logo header__logo_device_phone`}>
            NewsExplorer
          </h2>
          <img className="modal__close header-modal__close" src={closeButton} />
        </div>
        <div className="header-modal__content">
          <button className={`header__text-button header-modal__home`}>
            Home
          </button>
          <button
            className="header-modal__sign-in"
            onClick={() => {
              props.openModal("sign-in");
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
