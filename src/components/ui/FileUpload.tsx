import { ChangeEvent, useRef, useState } from "react";
import upload from "../../assets/icons/upload.svg";
import Button from "./Button";
import Input from "./Input";

const FileUpload = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...filesArray]);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles?.splice(index, 1);
    setFiles(newFiles);
  };

  return (
    <div className=" max-w-[550px]">
      <div className="border-2 border-dashed space-y-4 p-5 rounded-2xl flex flex-col justify-between items-center ">
        <img src={upload} alt="" />
        <div className="text-center">
          <p className="font-bold">
            <span className="text-brand-blue">Click to upload</span> or drag and
            drop
          </p>
          <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
        </div>
        <div className="relative w-3/5 pt-5">
          <hr className="my-auto" />
          <span className="absolute right-[45%] -top-1 font-bold bg-white p-3 px-3 rounded-full">
            OR
          </span>
        </div>
        <Input
          ref={inputRef}
          type="file"
          multiple
          accept="image/*,application/pdf,application/doc*"
          className="hidden"
          onChange={handleFileChange}
        />
        <Button
          variant="inverted"
          onClick={(e) => {
            e.preventDefault();
            inputRef.current?.click();
          }}
        >
          Browse Files
        </Button>
      </div>
      {files?.length > 0 && (
        <ul className="space-y-1 mt-2">
          {files?.map((file, index) => (
            <li
              className="w-full flex items-center font-bold text-xs pl-2 pr-1 py-1 rounded-md justify-between bg-slate-100"
              key={index}
            >
              <span>{file.name}</span>-
              <span>{(file.size / 1024).toFixed(2)} KB</span>
              <button
                className="bg-red-300 border border-red-400 font-semibold text-white px-1.5 pb-0.5 rounded-full"
                type="button"
                onClick={() => removeFile(index)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileUpload;
