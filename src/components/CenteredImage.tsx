import React from 'react';

interface CenteredImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const CenteredImage: React.FC<CenteredImageProps> = ({ src, alt, width, height }) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={src} alt={alt} width={width} height={height} />
    </div>
);

export default CenteredImage;
