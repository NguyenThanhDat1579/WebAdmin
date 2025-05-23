import axiosInstance from './axiosInstance';

export const getEventList = async () => {
  try {
    const response = await axiosInstance.get('/events/home');
    console.log("event listlist: ", response.data);
    return response.data.data;
  } catch (error) {
    console.error('Lỗi khi lấy sự kiện:', error);
    return [];
  }
};
