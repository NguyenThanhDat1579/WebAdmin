
import axiosInstance from './axiosInstance';

export const getEventDetail = async (eventId) => {
  try {
    const response = await axiosInstance.get(`/events/detail/${eventId}`);
    console.log("event detail: ", response.data);
    return response.data.data;
  } catch (error) {
    console.error('Lỗi khi lấy sự kiện:', error);
    return null;
  }
};
