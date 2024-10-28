import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserDetails, updateUserDetails } from "../store/userSlice";

const GET_ME_URL = `${process.env.REACT_APP_API_URL}/user/profile`;

async function fetchUserDetails() {
  try {
    const response = await axios.get(GET_ME_URL);
    console.log(response, "hello world checking");
    console.log(response.data, "from home");
    return response.data;
  } catch (error) {
    throw error;
  }
}

function useUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const { isAuthenticated, user } = useSelector(selectUserDetails);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isAuthenticated) {
          const userDetails = await fetchUserDetails();
          dispatch(updateUserDetails(userDetails));
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchData();
  }, [isAuthenticated, dispatch]);

  useEffect(() => {
    if (!isAuthenticated && pathname !== "/") {
      navigate("/");
    }
  }, [isAuthenticated, pathname, navigate]);

  return {
    isAuthenticated,
  };
}

export default useUser;
