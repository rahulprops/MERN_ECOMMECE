import { Navigate } from "react-router-dom";

const RequireAdmin = ({ children }) => {
  const isAdmin = true;  // Example condition (replace with your actual admin check)

  if (!isAdmin) {
    return <Navigate to="/login" />;
  }

  return children;  // Render the children components when the user is an admin
};

export default RequireAdmin;
