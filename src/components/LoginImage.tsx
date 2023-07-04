// src/components/LoginImage.tsx

import React from 'react';

const LoginImage: React.FC<{imgSrc: string}> = ({imgSrc}) => (
    <img src={imgSrc} alt="Login Illustration" style={{width: "300px", height: "auto", float: "right", marginLeft: "20px"}}/>
);

export default LoginImage;
