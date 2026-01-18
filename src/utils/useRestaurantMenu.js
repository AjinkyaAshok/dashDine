import { useEffect, useState } from "react";
import mockMenu from "../mocks/menu.json";

const USE_MOCK_DATA = true; // 🔥 toggle this anytime

const useRestaurantMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!resID) return;

    if (USE_MOCK_DATA) {
      setLoading(true);

      setTimeout(() => {
        setResInfo(mockMenu.data);
        setLoading(false);
      }, 500);

      return;
    }

    fetchMenu();
  }, [resID]);

  const fetchMenu = async () => {
    try {
      setLoading(true);
      // real API code stays here (disabled for now)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { resInfo, loading, error };
};

export default useRestaurantMenu;
