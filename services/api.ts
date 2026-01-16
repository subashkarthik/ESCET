// API Configuration
const API_BASE_URL = "http://localhost:8000/api";

// API Service for all backend calls
export const api = {
  // Base fetch wrapper with error handling
  async fetch(endpoint: string, options: RequestInit = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const token = localStorage.getItem("access_token");

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },

  // Departments
  departments: {
    getAll: () => api.fetch("/departments/"),
    getById: (id: string) => api.fetch(`/departments/${id}/`),
  },

  // News
  news: {
    getAll: (category?: string) => {
      const query = category ? `?category=${category}` : "";
      return api.fetch(`/news/${query}`);
    },
    getById: (id: number) => api.fetch(`/news/${id}/`),
  },

  // Facilities
  facilities: {
    getAll: () => api.fetch("/facilities/"),
    getById: (id: number) => api.fetch(`/facilities/${id}/`),
  },

  // Gallery
  gallery: {
    getImages: (category?: string) => {
      const query = category ? `?category=${category}` : "";
      return api.fetch(`/gallery/images/${query}`);
    },
    getVideos: () => api.fetch("/gallery/videos/"),
  },

  // Management Team
  management: {
    getAll: () => api.fetch("/management/"),
  },

  // Scholarships
  scholarships: {
    getAll: () => api.fetch("/scholarships/"),
  },

  // Enquiries (Public submission)
  enquiries: {
    submit: (data: {
      first_name: string;
      email: string;
      phone: string;
      department: string;
      comments: string;
    }) =>
      api.fetch("/enquiries/", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  },

  // Contact (Public submission)
  contact: {
    submit: (data: {
      name: string;
      email: string;
      phone?: string;
      subject: string;
      message: string;
    }) =>
      api.fetch("/contact/", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  },

  // Authentication
  auth: {
    login: async (username: string, password: string) => {
      const response = await api.fetch("/auth/login/", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });

      if (response.tokens) {
        localStorage.setItem("access_token", response.tokens.access);
        localStorage.setItem("refresh_token", response.tokens.refresh);
      }

      return response;
    },

    logout: async () => {
      const refreshToken = localStorage.getItem("refresh_token");
      if (refreshToken) {
        await api.fetch("/auth/logout/", {
          method: "POST",
          body: JSON.stringify({ refresh_token: refreshToken }),
        });
      }
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    },

    refreshToken: async () => {
      const refreshToken = localStorage.getItem("refresh_token");
      if (!refreshToken) throw new Error("No refresh token");

      const response = await fetch(`${API_BASE_URL}/auth/token/refresh/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh: refreshToken }),
      });

      const data = await response.json();
      if (data.access) {
        localStorage.setItem("access_token", data.access);
      }
      return data;
    },
  },
};

export default api;
