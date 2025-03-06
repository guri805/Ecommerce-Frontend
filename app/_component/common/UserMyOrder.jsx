
import OrderTable from "./OrderTable";

const UserMyOrder = () => {
  // Dummy Order Data
  const orders = [
    {
      id: 1,
      orderId: "ORD123456",
      paymentId: "PAY123456",
      name: "Gursangam Singh",
      phone: "9876543210",
      address: "Hno: 222, Sector 111, Mohali, SAS Nagar",
      pincode: "160055",
      totalAmount: 200.0,
      email: "gursangam@example.com",
      userId: "USR001",
      status: "confirm",
      date: "2025-03-05",
    },
    {
      id: 2,
      orderId: "ORD987654",
      paymentId: "PAY987654",
      name: "John Doe",
      phone: "9876543222",
      address: "House No. 123, Chandigarh",
      pincode: "160012",
      totalAmount: 350.0,
      email: "john@example.com",
      userId: "USR002",
      status: "pending",
      date: "2025-03-04",
    },
  ];

  return (

    <div className="card ">
      <div className="cartHeader p-3 border-b-2">
        <h2 className="font-medium">My Order</h2>
        <p>
          There are{" "}
          <span className="font-bold text-primary">{orders.length}</span>{" "}
          products in your my order
        </p>
        <OrderTable
          orders={orders}
        />
      </div>
    </div>

  );
};

export default UserMyOrder;
