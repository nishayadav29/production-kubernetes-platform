import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const userRes = await axios.get("http://localhost:3000/users");
      const productRes = await axios.get("http://localhost:3000/products");
      const orderRes = await axios.get("http://localhost:3000/orders");

      setUsers(userRes.data.users);
      setProducts(productRes.data.products);
      setOrders(orderRes.data.orders);
    } catch (error) {
      console.error(error);
      alert("Unable to connect to API Gateway");
    }
  }

  return (
    <div className="container py-5">

      <h1 className="text-center text-primary mb-5">
        🚀 Production Kubernetes Platform
      </h1>

      <div className="row g-4">

        {/* User Service */}

        <div className="col-md-4">
          <div className="card shadow h-100">

            <div className="card-body">

              <h3>👤 User Service</h3>

              <span className="badge bg-success mb-3">
                Running
              </span>

              <hr />

              <h5>Users</h5>

              {
                users.map((user) => (
                <div key={user._id} className="mb-2">
                <strong>👤 {user.name}</strong>
                <br />
                <small>{user.email}</small>
               </div>
               ))
              }

            </div>

          </div>
        </div>

        {/* Product Service */}

        <div className="col-md-4">
          <div className="card shadow h-100">

            <div className="card-body">

              <h3>💻 Product Service</h3>

              <span className="badge bg-success mb-3">
                Running
              </span>

              <hr />

              <h5>Products</h5>

              {
                products.map((product) => (
                  <p key={product.id}>
                    {product.name} - ₹{product.price}
                  </p>
                ))
              }

            </div>

          </div>
        </div>

        {/* Order Service */}

        <div className="col-md-4">
          <div className="card shadow h-100">

            <div className="card-body">

              <h3>📦 Order Service</h3>

              <span className="badge bg-success mb-3">
                Running
              </span>

              <hr />

              <h5>Orders</h5>

              {
                orders.map((order) => (
                  <p key={order.orderId}>
                    #{order.orderId} - {order.product}
                  </p>
                ))
              }

            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default App;