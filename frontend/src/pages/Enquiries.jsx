import { useEffect, useState } from "react";
import api from "../services/api";
import { BiEdit, BiTrash } from "react-icons/bi";

const Enquiries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/enquiries").then((res) => setData(res.data));
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/enquiries/${id}`);
      setData((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="min-h-screen w-full px-5 pt-14 overflow-y-scroll">
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Project Name</th>
              <th>Phone Number</th>
              <th>Budget Range</th>
              <th>Description</th>
              <th>Links</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.clientName}</td>
                  <td>{item.projectName}</td>
                  <td>{item.phone}</td>
                  <td>{item.budget}</td>
                  <td className="truncate">{item.description}</td>

                  <td>
                    <a href={item.links} target="_blank">
                      {item.links}
                    </a>
                  </td>
                  <td className="flex gap-2 items-center">
                    <button
                      className="btn"
                      onClick={() => handleDelete(item._id)}
                    >
                      <BiTrash />
                    </button>
                    <button className="btn btn-success">
                      <BiEdit />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Enquiries;
