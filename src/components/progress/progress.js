import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const Progress = () => {
  return (
    <div className="bar">
      <ProgressBar variant="success" now={40} />
      <ProgressBar variant="info" now={20} />
      <ProgressBar variant="warning" now={60} />
      <ProgressBar variant="danger" now={80} />
    </div>
  );
};

export default Progress;
