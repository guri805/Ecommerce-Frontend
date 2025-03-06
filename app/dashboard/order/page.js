import Sidebar from "@/app/_component/AdminComponent/Sidebar"

const page = () => {
    return (
        <section className="adminOrder py-5">
            <div className="container flex gap-5 ">
                <div className="leftPart w-1/4">
                    <Sidebar />
                </div>
                <div className="rightPart w-3/4">
                    <div className="cartHeader p-3 border-b-2">
                        <h2 className='font-medium text-2xl'>Order List</h2>
                        <p className='capitalize'>There are <span className='font-bold text-primary'>2</span> orders have been placed</p>
                        <div className="orderlist mt-5">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
