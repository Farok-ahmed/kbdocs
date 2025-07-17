"use client";
import { useEffect, useRef } from "react";
import Wavify from "react-wavify";

const WaveWithId = ({ waveId, options, fill, style = {}, className = "" }) => {
  const waveRef = useRef(null);

  useEffect(() => {
    const svg = waveRef.current?.querySelector("svg");
    const path = svg?.querySelector("path");
    if (path && waveId) {
      path.setAttribute("id", waveId);
    }
  }, [waveId]);

  return (
    <div ref={waveRef} className={className} style={style}>
      <Wavify fill={fill} paused={false} options={options} />
    </div>
  );
};

export default WaveWithId;
