const apiClient = async (endpoint, options = {}) => {
  const baseURL = "https://cetrix13.github.io";
  const headers = {
    //"Content-Type": "application/json",
    ...options.headers,
  };

  const config = {
    ...options,
    headers,
  };

  return fetch(`${baseURL}${endpoint}`, config)
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(
          new Error("Network response was not ok " + response.statusText)
        );
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error("Fetch error:", error);
    });
};

export default apiClient;
