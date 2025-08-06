type Response<T> = {
  statusCode: number;
  data: T;
};

const isProduction = process.env.NODE_ENV === "production";
const DOMAIN = process.env.DOMAIN;

const SITE_URL = isProduction ? DOMAIN : "http://localhost:3000";
const API_URL = `${SITE_URL}/api/v1`;

async function get<T>(endpoint: string): Promise<Response<T>> {
  const response = await fetch(`${API_URL}/${endpoint}`);
  const data: T = await response.json();

  return { statusCode: response.status, data };
}

const api = {
  get,
};

export default api;
