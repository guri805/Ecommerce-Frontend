import ProductForm from "@/app/_component/AdminComponent/ProductForm"
import Sidebar from "@/app/_component/AdminComponent/Sidebar"


const AddProduct = () => {
    return (
        <section className="AddCategory py-10">
            <div className="container">
                <div className='flex'>
                    <div className="leftside basis-1/4">
                        <Sidebar />
                    </div>
                    <div className="rightside px-4 basis-3/4">
                        <div className="card bg-white shadow-md rounded-md p-5">
                            <h2 className='text-xl font-semibold pb-2'>Product Upload</h2>
                            <ProductForm />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default AddProduct
