
const Badge = ({ status }) => {
  const statusClasses = {
    confirm: "bg-green-200 text-green-700",
    pending: "bg-yellow-200 text-yellow-700",
    canceled: "bg-red-200 text-red-700",
  };

  return (
    <span className={`px-3 py-1 text-xs font-bold rounded ${statusClasses[status] || "bg-gray-200"}`}>
      {status}
    </span>
  );
};

export default Badge;
