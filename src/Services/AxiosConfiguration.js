import authHeader from "./AuthHeader";

const onRequest = async (config) => {
  config.headers = await authHeader(config);
  return config;
};

export function setupInterceptorsTo(axiosInstance) {
  axiosInstance.interceptors.request.use(
    onRequest,
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  return axiosInstance;
}
