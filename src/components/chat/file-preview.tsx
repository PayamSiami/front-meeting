import React, { useState } from "react";
import FileHeader from "./file-header";
import FileInput from "./file-input";
import FileSender from "./file-sender";
import FileViewer from "./file-viewer";

export default function FilePreview() {
  const [message, setMessage] = useState("");
  return (
    <div className="relative py-2 w-full flex items-center justify-center">
      {/* Container */}
      <div className="w-full flex flex-col items-center">
        {/* Header */}
        <FileHeader />
        {/* viewing selected files */}
        <FileViewer />
        <div className="w-full flex flex-col items-center">
          {/* Message Input */}
          <FileInput message={message} setMessage={setMessage} />
          {/* send and multiple files */}
          <FileSender />
        </div>
      </div>
    </div>
  );
}
