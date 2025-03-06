import Sidebar from "../../_component/AdminComponent/Sidebar";
import CustomTable from "../../_component/AdminComponent/CustomTable";

// Define columns for Users
const columns = [
    { id: "userImage", label: "User Image", align: "left", maxWidth: 120 },
    { id: "userName", label: "User Name", align: "left", maxWidth: 200 },
    { id: "userEmail", label: "Email", align: "left", maxWidth: 250 },
    { id: "userPhone", label: "Phone No.", align: "left", maxWidth: 150 },
];

// Sample user data
const rows = [
    {
        id: "1",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        userName: "John Doe",
        userEmail: "johndoe@example.com",
        userPhone: "+1 234 567 890",
    },
    {
        id: "2",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        userName: "Jane Smith",
        userEmail: "janesmith@example.com",
        userPhone: "+1 987 654 321",
    },
];

const Users = () => {
    return (
        <section className="AddCategory py-10">
            <div className="container">
                <div className="flex">
                    <div className="leftside basis-1/4">
                        <Sidebar />
                    </div>
                    <div className="rightside px-4 basis-3/4">
                        <div className="card bg-white shadow-md rounded-md p-5">
                            <div className="col1 my-3">
                                <h1 className="text-2xl font-semibold">User List</h1>
                            </div>
                            <div className="col2 shadow-md">
                                {/* Use CustomTable */}
                                <CustomTable columns={columns} rows={rows} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Users;
