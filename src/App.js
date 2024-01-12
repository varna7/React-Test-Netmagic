import SideNav from "./components/SideNav";
import Home from "./components/Home";
import MemberTable from "./components/MemberTable";
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const sampleData = [
  {
    id: 1,
    name: "John Doe",
    plan: "john@example.com",
    status: "active",
    paid: "2022-01-01",
    amt:2000,
  },
  {
    id: 5,
    name: "Carl Doe",
    plan: "john@example.com",
    status: "active",
    paid: "2022-01-01",
    amt:2000,
  },
  {
    id: 8,
    name: "John tom",
    plan: "john@example.com",
    status: "active",
    paid: "2022-01-01",
    amt:2000,
  },
  {
    id: 2,
    name: "Jane Doe",
    plan: "jane@example.com",
    status: "pending",
    paid: "2022-02-01",
    amt:2500,
  },
  {
    id: 3,
    name: "Bob Smith",
    plan: "bob@example.com",
    status: "expired",
    paid: "2021-12-01",
    amt:2000,
  },
  // Add more sample data as needed
];

function App() {
  return (
    <div className="App">
      <Router>
        <div className="d-flex flex-col flex-sm-row">
          <SideNav />
          <div className="ms-md-5 ms-3 right">
          <Routes>
            <Route exact path="/" element={<MemberTable data={sampleData} />} />
          </Routes>
          </div>
          
        </div>
      </Router>
    </div>
  );
}

export default App;
