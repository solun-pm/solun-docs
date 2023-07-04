// src/components/SignUpImage.tsx

import React from 'react';

const SignUpImage: React.FC<{imgSrc: string}> = ({imgSrc}) => (
    <img src={imgSrc} alt="Sign Up Illustration" style={{width: "300px", height: "auto", float: "right", marginLeft: "20px"}}/>
);

export default SignUpImage;
