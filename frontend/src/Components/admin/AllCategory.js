import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { url } from "../../common/constants";
import AdminMenuBar from "./AdminMenuBar";
import "./AdminAllCategory.css"; // Import the CSS file

const AdminAllCategory = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    axios.get(url + "/category/").then((response) => {
      const result = response.data;
      setCategory(result);
      console.log(result);
    });
  };

  const dashboard = () => {
    navigate("/adminDashboard");
  };

  return (
    <div className="row">
      <AdminMenuBar />

      <div className="main-content col">
        <h1 className="text-indigo-600">All Category</h1>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {category.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td>
                  {cat.categoryName}
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      style={{ height: "30px" }}
                      src={url + "/store/" + cat?.categoryImage}
                      alt=""
                    />
                  </div>
                </td>
                <td>{cat.categoryDescription}</td>
                <td>
                  {/* Action buttons */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button onClick={dashboard}>Back To DashBoard</Button>
      </div>
    </div>
  );
};

export default AdminAllCategory;
