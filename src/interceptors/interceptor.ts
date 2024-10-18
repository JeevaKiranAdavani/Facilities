import api from '../services/api';

const setupInterceptors = () => {
  api.interceptors.request.use(
    (config) => {
      const excludedPaths = ['/login', '/signup'];
      const isExcluded = excludedPaths.some(path => config.url?.includes(path));
      console.log('calling 1',excludedPaths,isExcluded)
      if (!isExcluded) {
        console.log('calling 2',excludedPaths,isExcluded)
        const token = localStorage.getItem('jwtToken');
        if (token) {
          console.log('calling 3',excludedPaths,isExcluded)
          config.headers.Authorization = `Bearer ${token}`;
          console.log('calling 4',config.headers.Authorization)
        }
      }
      return config;
    },
    (error) => {
      console.log('calling 4',error)
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
