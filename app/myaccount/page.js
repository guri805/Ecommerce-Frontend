import MyAccountLeftSideBar from "../_component/common/MyAccountLeftSideBar";
import ProfileForm from "../_component/common/ProfileForm ";

const MyAccount = () => {
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
            <h2 className="pb-3">My Profile</h2>
            <hr />
            <ProfileForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
