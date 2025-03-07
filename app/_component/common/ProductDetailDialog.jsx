'use client';
import { Dialog, DialogContent, IconButton } from "@mui/material";
import { IoClose } from "react-icons/io5"; 
import ProductDetailLayout from "../productComponents/ProductDetailLayout";
import { useDialogProductDetail } from "../_context/DialogProductDetailProvider";

const ProductDetailDialog = () => {
    const { openProductDetailModel, maxWidth, handleCloseOpenProductDetailModel } = useDialogProductDetail();
    // console.log("Dialog State:", openProductDetailModel);

    return (
        <Dialog
            open={openProductDetailModel}
            maxWidth={maxWidth}
            onClose={handleCloseOpenProductDetailModel}
            className="productDetailModel"
        >
            <DialogContent className="productDetailModelContent relative flex items-center w-full">
                {/* Close Button */}
                <IconButton
                    onClick={handleCloseOpenProductDetailModel}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                >
                    <IoClose size={24} />
                </IconButton>

                {/* Product Details */}
                <ProductDetailLayout />
            </DialogContent>
        </Dialog>
    );
};

export default ProductDetailDialog;
