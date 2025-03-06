import MyAccountLeftSideBar from "../../_component/common/MyAccountLeftSideBar";
import UserMyList from "../../_component/common/UserMyList";

const MyList = () => {
    return (
        <section className="py-10">
            <div className="container flex gap-5">
                {/* Sidebar Section */}
                <div className="w-1/4">
                    <MyAccountLeftSideBar />
                </div>

                {/* Main Content Section */}
                <div className="w-3/4">
                    <div className="bg-white p-5 shadow-md rounded-md">
                        <UserMyList />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyList;
