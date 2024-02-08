import React, { useState, useRef } from "react";
import { MdAddAPhoto } from "react-icons/md";

const ProfilePicture = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleDeleteImage = () => {
    setSelectedImage(null);
    try {
      // @ts-ignore
      inputRef.current.value = "";
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div
      className="relative bg-cover bg-center w-72 h-72 rounded-lg mb-8 cursor-pointer select-none  border-2 border-slate-300"
      style={{
        backgroundImage: selectedImage ? `url(${selectedImage})` : "",
        backgroundColor: "#EFEFEF",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderStyle: selectedImage ? "solid" : "dashed",
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {selectedImage ? (
        <div
          onClick={handleDeleteImage}
          className="absolute top-0 right-0 z-10 bg-slate-300 py-2 px-3 rounded-bl-md rounded-tr-md"
        >
          Remove
        </div>
      ) : (
        <div className="-z-0 absolute flex h-full w-full justify-center items-center">
          <MdAddAPhoto fontSize={45} />
        </div>
      )}
      <input
        className="cursor-pointer"
        ref={inputRef}
        type="file"
        style={{
          opacity: 0,
          height: "100%",
          width: "100%",
        }}
        accept="image/*"
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default ProfilePicture;
