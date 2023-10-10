// import { styled } from "@tanstack/react-query-devtools/build/lib/utils";
import { useUser } from "../features/authentication/useUser";
// import { Spinner } from "../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// const FullPage = styled.div`
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: var(--color-gray-50);
// `;
// function ProtectedRoute({children}) {
//   const navigate = useNavigate();

//   // 1. load the authenticated user
//   const { isLoading, isAuthenticated } = useUser();

//   // 2. while loading , show spinner

//   useEffect(
//     function () {
//       if (!isAuthenticated && !isLoading) {
//         navigate(`/login`);
//       }
//     },
//     [isAuthenticated, isLoading, navigate]
//   );

//   if (isLoading)
//     return (
//       <FullPage>
//         <Spinner />
//       </FullPage>
//     );
//   // 3. if there no authenicated user , redirect to login page

//   // 4. if there a user , render the app
//   if (isAuthenticated) return children;
// }

// export default ProtectedRoute;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate(`/login`);
      }
    },
    [isAuthenticated, isLoading, navigate]
  );

  return children;
}

export default ProtectedRoute;
