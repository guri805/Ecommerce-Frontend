import DashboardView from "../../_component/AdminComponent/DashboardView"
import Sidebar from "../../_component/AdminComponent/Sidebar"


const Dashboard = () => {
    
    return (
        <section className="AddCategory py-10">
            <div className="container">
                <div className='flex'>
                    <div className="leftside basis-1/4">
                        <Sidebar />
                    </div>
                    <div className="rightside px-4 basis-3/4">
                        <DashboardView />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
