import MyAccountLeftSideBar from "../_component/common/MyAccountLeftSideBar";
import UserMyOrder from "../_component/common/UserMyOrder";

const MyOrder = () => {
    return (
        <section className="py-10">
            <div className="container flex gap-5">
                {/* Sidebar Section */}
                <div className="w-1/4">
                    <MyAccountLeftSideBar />
                </div>

                {/* Main Content Section */}
                <div className="w-3/4 bg-white p-5 shadow-md rounded-md">
                        <UserMyOrder />
                </div>
            </div>
        </section>
    );
};

export default MyOrder;
