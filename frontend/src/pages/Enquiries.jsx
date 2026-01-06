import { useEffect, useState } from "react";
import api from "../services/api";

const Enquiries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/enquiries").then(res => setData(res.data));
  }, []);

  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th>Client</th>
          <th>Project</th>
          <th>Budget</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            <td>{item.clientName}</td>
            <td>{item.projectName}</td>
            <td>{item.budget}</td>
            <td>
              <button onClick={() => api.delete(`/enquiries/${item._id}`)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Enquiries;
