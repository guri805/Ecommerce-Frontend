import ProductListPageView from '../_component/productComponents/ProductListPageView';
import SidebarSection from '../_component/common/SidebarSection';


const AllProduct = () => {
    return (
        <>
            <section className="sidebarsection py-3 relative">
                <div className="container flex">
                    {/* Sidebar with sticky positioning */}
                    <div className="sidebar w-[20%] h-screen sticky top-0">
                        <SidebarSection />
                    </div>

                    {/* Product List Section */}
                    <div className="rightsection w-[80%]">
                        <ProductListPageView />
                    </div>
                </div>
            </section>
        </>
    );
};

export default AllProduct;



