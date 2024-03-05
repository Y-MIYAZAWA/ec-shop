const storage = {
  getToken: () => {
    return window.localStorage.getItem(`token`);
  },
  getAdminToken: () => {
    return window.localStorage.getItem(`adminToken`);
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`token`, token);
  },
  setAdminToken: (token: string) => {
    window.localStorage.setItem(`adminToken`, token);
  },
  clearToken: () => {
    window.localStorage.removeItem(`token`);
  },
  clearAdminToken: () => {
    window.localStorage.removeItem(`adminToken`);
  },
};

export default storage;