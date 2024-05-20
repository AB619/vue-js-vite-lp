const apiClient = (endpoint, options = {}) => {
  const baseURL = "https://git.epam.com";
  const headers = {
    "Content-Type": "application/json",
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
      console.error("Fetch error:", error);
    });
};

export default apiClient;
