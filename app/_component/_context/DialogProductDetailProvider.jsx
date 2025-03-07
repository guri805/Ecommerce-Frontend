"use client";

import { createContext, useContext, useState } from "react";

const DialogProductDetailContext = createContext();

export const DialogProductDetailProvider = ({ children }) => {

  const [openProductDetailModel, setOpenProductDetailModel] = useState(false);
  const [maxWidth, setMaxWidth] = useState("lg");

  const handleCloseOpenProductDetailModel = () => {
    setOpenProductDetailModel(false);
  };

  console.log("Dialog Open State:", openProductDetailModel);

  return (
    <DialogProductDetailContext.Provider
      value={{ openProductDetailModel, setOpenProductDetailModel, maxWidth, setMaxWidth, handleCloseOpenProductDetailModel }}
    >
      {children}
    </DialogProductDetailContext.Provider>
  );
};

// Named export
export const useDialogProductDetail = () => useContext(DialogProductDetailContext);
