import axios from "axios";
import { AxiosResponse } from "axios";

const API_KEY = "SGV4tBe3uVcvN13Hb6CJ755EimgsneD2tvy1dRm6enM";

axios.defaults.baseURL = "https://api.unsplash.com";

type ImageResultItem = {
  total: number;
  total_pages: number;
  results: [];
};
export const fetchPhoto = async (
  currentPage: number,
  per_page: number,
  photo: string
) => {
  const response: AxiosResponse<ImageResultItem> = await axios.get(
    `search/photos?client_id=${API_KEY}&page=${currentPage}&per_page=${per_page}&query=${photo}`
  );
  return response.data;
};
