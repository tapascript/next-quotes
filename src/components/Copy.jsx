"use client";

import { FaCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

import { useState } from "react";

const Copy = ({ text }) => {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text);
    setCopied(true);
  }

  return (
    <>
      {copied ? (
        <TiTick size={48} />
      ) : (
        <a className="cursor-pointer" onClick={handleCopy}>
          <FaCopy size={32} />
        </a>
      )}
    </>
  );
};

export default Copy;
