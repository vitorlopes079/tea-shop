import React from 'react';
import Image from 'next/image';
import construction from '../../../images/construction/construction.jpg';

const Page: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    position: "relative",
    width: "100%" 
  };

  const overlayTextStyle: React.CSSProperties = {
    position: "absolute",
    fontSize: "4vw",
    color: "yellow",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontWeight: "bold",
    zIndex: 1, 
    textAlign: "center", 
    maxWidth: "100%", 
  };

  return (
    <div style={containerStyle}>
      <h1 style={overlayTextStyle}>Under Construction</h1>
      <Image src={construction} alt="construction" layout="responsive" width={750} height={500} />
    </div>
  );
};

export default Page;