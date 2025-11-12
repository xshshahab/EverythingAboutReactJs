import React from "react";

const Content: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 p-8 bg-gray-50 text-gray-800 overflow-y-auto">
      <h2 className="text-3xl font-semibold mb-4">Welcome to the Dashboard!</h2>
      <p className="text-gray-600">
        Here’s where you’ll see your analytics, activity, and updates. You can
        customize this space however you’d like.
      </p>

      {/* Example content area */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="font-medium mb-2 text-gray-700">Analytics</h3>
          <p className="text-sm text-gray-500">
            Track your recent performance metrics here.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="font-medium mb-2 text-gray-700">Recent Activity</h3>
          <p className="text-sm text-gray-500">
            View your most recent changes and interactions.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="font-medium mb-2 text-gray-700">Tasks</h3>
          <p className="text-sm text-gray-500">
            Manage and track your ongoing tasks efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
