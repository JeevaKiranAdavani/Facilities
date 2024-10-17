import api from '../services/api';

const setupInterceptors = () => {
  api.interceptors.request.use(
    (config) => {
      const excludedPaths = ['/login', '/signup', '/checkin'];
      const isExcluded = excludedPaths.some(path => config.url?.includes(path));

      if (!isExcluded) {
        const token = localStorage.getItem('jwtToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        alert('Unauthorized access. Redirecting to login.');
        localStorage.removeItem('jwtToken'); 
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );
};

export default setupInterceptors;
