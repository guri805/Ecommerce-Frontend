import AddCategoryForm from "@/app/_component/AdminComponent/AddCategoryForm"
import Sidebar from "@/app/_component/AdminComponent/Sidebar"


const AddCategory = async () => {

    return (
        <section className="AddCategory py-10">
            <div className="container">
                <div className='flex'>
                    <div className="leftside basis-1/4">
                        <Sidebar />
                    </div>
                    <div className="rightside px-4 basis-3/4">
                        <div className="card bg-white shadow-md rounded-md p-5">
                            <h2 className='text-xl font-semibold pb-2'>Add Category</h2>
                            <AddCategoryForm  />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default AddCategory
