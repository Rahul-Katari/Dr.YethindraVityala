import ApiService from "../services/ApiService";

export const getBlogsAndVideos = async () => {
  try {
    const data = await ApiService.get("blogs?reqtype=api");
    return data;
  } catch (error) {
    throw error;
  }
};
