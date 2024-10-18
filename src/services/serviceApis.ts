import api from './api';

export const login = async (username: string, password: string) => {
  try {
    const response = await api.post('/login', { username, password });
    const { jwtToken, role } = response.data;

    localStorage.setItem('jwtToken', jwtToken);
    localStorage.setItem('userRole', role);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const checkinDetails = async () => {
  try {
    const response = await api.get('/dashboard/checkin',);
    //const { jwtToken, role } = response.data;

    // localStorage.setItem('jwtToken', jwtToken);
    // localStorage.setItem('userRole', role);
    console.log(response.data)
    return response.data;

  } catch (error) {
    throw error;
  }
};

