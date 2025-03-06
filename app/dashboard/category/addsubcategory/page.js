
import AddSubCategoryForm from '@/app/_component/AdminComponent/AddSubCategoryForm';
import Sidebar from '@/app/_component/AdminComponent/Sidebar';

const AddSubCategory = () => {

    return (
        <section className="AddSubCategory py-10">
            <div className="container">
                <div className="flex">
                    <div className="leftside basis-1/4">
                        <Sidebar />
                    </div>
                    <div className="rightside px-4 basis-3/4">
                        <div className="card bg-white shadow-md rounded-md p-5">
                            <h1 className="text-2xl font-semibold my-3">Add Category</h1>
                            {/* Form */}
                            <AddSubCategoryForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddSubCategory;
