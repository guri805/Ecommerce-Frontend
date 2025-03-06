
import UserMyList from "../_component/common/UserMyList";

const Wishlist = () => {
    return (
        <section className="py-10">
            <div className="container flex justify-center gap-5">
                {/* Main Content Section */}
                <div className="">
                    <div className="bg-white p-5 shadow-md rounded-md">
                        <UserMyList />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Wishlist;
