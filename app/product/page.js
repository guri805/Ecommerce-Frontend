import ProductDetailLayout from "../_component/productComponents/ProductDetailLayout"
import ProductDetailsTabs from "../_component/productComponents/ProductDetailsTabs"

const ProductDetail = () => {
    return (
        <>
            <section className="ProductDetail bg-white py-10">

                <div className="container mx-auto ">
                    <ProductDetailLayout />
                    <ProductDetailsTabs />
                </div>

            </section>

        </>

    )
}

export default ProductDetail
