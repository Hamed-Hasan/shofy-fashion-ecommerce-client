import React from "react";
import Image from "next/image";
// internal
import shape_1 from '@assets/img/login/login-shape-1.png';
import shape_2 from '@assets/img/login/login-shape-2.png';
import shape_3 from '@assets/img/login/login-shape-3.png';
import shape_4 from '@assets/img/login/login-shape-4.png';

const LoginShapes = () => {
  return (
    <div className="tp-login-shape">
      <Image
        className="tp-login-shape-1"
        src={shape_1}
        alt="shape"
      />
      <Image
        className="tp-login-shape-2"
        src={shape_2}
        alt="shape"
      />
      <Image
        className="tp-login-shape-3"
        src={shape_3}
        alt="shape"
      />
      <Image
        className="tp-login-shape-4"
        src={shape_4}
        priority
        alt="shape"
      />
    </div>
  );
};

export default LoginShapes;
