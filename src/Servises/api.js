import axios from "axios";

const API_KEY = "SGV4tBe3uVcvN13Hb6CJ755EimgsneD2tvy1dRm6enM";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchPhoto = async (currentPage, per_page, photo) => {
  const response = await axios.get(
    `search/photos?client_id=${API_KEY}&page=${currentPage}&per_page=${per_page}&query=${photo}`
  );
  return response.data;
};
