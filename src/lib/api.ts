const API_URL = "https://api.tempmailportal.com/api";

export async function api(endpoint: string, method = "GET", token?: string) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {},
  });

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
}
