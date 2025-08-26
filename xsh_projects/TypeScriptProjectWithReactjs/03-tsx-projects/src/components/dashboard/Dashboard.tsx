import React from "react";
import Sidebar from "../sidebar/Sidebar";
import ProjectTable from "../table/Table";

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-900">
        <ProjectTable />
      </div>
    </div>
  );
};

export default Dashboard;
