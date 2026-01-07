import { useEffect, useState } from "react";
import api from "../services/api";
import { BiEdit, BiTrash } from "react-icons/bi";
import EditEnquiryForm from "../components/EditEnquiryForm";

const Enquiries = () => {
  const [data, setData] = useState([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    api.get("/enquiries").then((res) => setData(res.data));
  }, []);

  const handleDelete = async (id) => {
    if (confirm("are you sure?")) {
      try {
        await api.delete(`/enquiries/${id}`);
        setData((prev) => prev.filter((item) => item._id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="min-h-screen w-full px-5 py-20 overflow-y-scroll">
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Project Name</th>
              <th>Phone Number</th>
              <th>Budget Range</th>
              <th>Links</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr
                  key={item._id}
                  onClick={() => {
                    setSelectedEnquiry(item);
                    setIsModalOpen(true);
                    setIsEditMode(false);
                  }}
                  className="hover:bg-base-200 cursor-pointer"
                >
                  <td>{item.clientName}</td>
                  <td>{item.projectName}</td>
                  <td>{item.phone}</td>
                  <td>{item.budget}</td>
                  <td>
                    <a href={item.links} target="_blank">
                      {item.links}
                    </a>
                  </td>
                  <td className="flex gap-2 items-center">
                    <button
                      className="btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(item._id);
                      }}
                    >
                      <BiTrash />
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedEnquiry(item);
                        setIsEditMode(true);
                        setIsModalOpen(true);
                      }}
                    >
                      <BiEdit />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {isModalOpen && selectedEnquiry && (
        <dialog className="modal modal-open">
          <div className="modal-box max-w-2xl max-h-[80vh] overflow-y-auto">
            <h3 className="font-bold text-lg mb-4">
              {isEditMode ? "Edit Enquiry" : "Enquiry Details"}
            </h3>

            {!isEditMode ? (
              <>
                <p>
                  <b>Client Name:</b> {selectedEnquiry.clientName}
                </p>
                <p>
                  <b>Project Name:</b> {selectedEnquiry.projectName}
                </p>
                <p>
                  <b>Phone:</b> {selectedEnquiry.phone}
                </p>
                <p>
                  <b>Budget:</b> {selectedEnquiry.budget}
                </p>

                <p className="mt-2">
                  <b>Description:</b>
                  <br />
                  {selectedEnquiry.description}
                </p>

                <p className="mt-2">
                  <b>Links:</b>{" "}
                  <a
                    href={selectedEnquiry.links}
                    target="_blank"
                    className="link link-primary"
                  >
                    {selectedEnquiry.links}
                  </a>
                </p>
              </>
            ) : (
              <EditEnquiryForm
                enquiry={selectedEnquiry}
                onClose={() => setIsModalOpen(false)}
                onUpdate={(updated) => {
                  setData((prev) =>
                    prev.map((e) => (e._id === updated._id ? updated : e))
                  );
                  setIsModalOpen(false);
                }}
              />
            )}

            <div className="modal-action">
              <button className="btn" onClick={() => setIsModalOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Enquiries;
