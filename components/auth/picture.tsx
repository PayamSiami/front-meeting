import Image from "next/image";
import React, { useRef, useState } from "react";

export default function Picture({
  readablePicture,
  setPicture,
  setReadablePicture,
}: any) {
  const inputRef: any = useRef();
  const handleClick = () => inputRef.current.click();
  const [error, setError] = useState("");
  const handleChange = (e: any) => {
    let pic = e.target.files[0];
    if (
      e.type !== "image/jpeg" &&
      pic.type !== "image/png" &&
      pic.type !== "image/webp"
    ) {
      setError(`${pic.name} format is not supported.`);
      return;
    } else if (pic.size > 1024 * 1024 * 5) {
      setError(`${pic.name} is to large, maximum 5mb allowed.`);
      return;
    } else {
      setError("");
      setPicture(pic);
      const reader = new FileReader();
      reader.readAsDataURL(pic);
      reader.onload = (e) => {
        setReadablePicture(e.target?.result);
      };
    }
  };

  const handleRemovePic = () => {
    setReadablePicture("");
    setPicture("");
  };

  return (
    <div className="mt-8 content-center text-dark_text_1 space-y-1">
      <label htmlFor="picture" className="text-sm font-bold tracking-wide">
        Picture (optional)
      </label>

      {readablePicture ? (
        <>
          <Image
            className="w-20 h-20 object-cover rounded-full"
            src={readablePicture}
            alt="picture"
            width={50}
            height={50}
          />
          <div
            onClick={handleRemovePic}
            className="py-1 h-12 text-xs bg-dark_bg_3 rounded-md font-bold flex items-center justify-center cursor-pointer"
          >
            Remove
          </div>
        </>
      ) : (
        <div
          onClick={handleClick}
          className="w-full h-12 bg-dark_bg_3 rounded-md font-bold flex items-center justify-center cursor-pointer"
        >
          Upload picture
        </div>
      )}
      <input
        accept="image/png,image/jpeg,image/webp"
        type="file"
        name="picture"
        id="picture"
        hidden
        ref={inputRef}
        onChange={handleChange}
      />
      <div className="mt-2">
        <p className="text-red-400">{error}</p>
      </div>
    </div>
  );
}
