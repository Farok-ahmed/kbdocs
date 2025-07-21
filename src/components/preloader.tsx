"use client";

import { useEffect, useState } from "react";

export default function PreLoader() {
  const [isDomLoaded, setIsDomLoaded] = useState(false);

  useEffect(() => {
    setIsDomLoaded(true);
  }, []);

  if (isDomLoaded) return <></>;

  return (
    <div id="preloader">
      <div id="ctn-preloader" className="ctn-preloader">
        <div className="round_spinner">
          <div className="spinner"></div>
          <div className="text">
            <img src="/img/spinner_logo.png" alt="" />
            <h4>
              <span>kb</span>Doc
            </h4>
          </div>
        </div>
        <h2 className="head">Did You Know?</h2>
        <p></p>
      </div>
    </div>
  );
}
