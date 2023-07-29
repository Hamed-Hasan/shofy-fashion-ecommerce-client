import { useState } from "react";
import LoginForm from "../forms/login-form";

const CheckoutLogin = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="tp-checkout-verify-item">
      <p className="tp-checkout-verify-reveal">
        Returning customer?{" "}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="tp-checkout-login-form-reveal-btn"
        >
          Click here to login
        </button>
      </p>

      {isOpen && (
        <div id="tpReturnCustomerLoginForm" className="tp-return-customer">
          <LoginForm />
        </div>
      )}
    </div>
  );
};

export default CheckoutLogin;
