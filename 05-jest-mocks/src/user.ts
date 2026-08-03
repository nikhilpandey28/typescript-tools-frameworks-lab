export interface User {
  id: number;
  name: string;
}

export async function fetchUser(
  id: number
): Promise<User> {
  return {
    id,
    name: "Original User"
  };
}