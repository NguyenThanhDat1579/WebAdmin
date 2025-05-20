import axiosInstance from './axiosInstance';

export const getEventRevenue = async () => {
  try {
    const response = await axiosInstance.get('/events/revenue');
    console.log("event revenue: ", response.data);
    return response.data.data;
  } catch (error) {
    console.error('Lỗi khi lấy sự kiện:', error);
    return [];
  }
};
