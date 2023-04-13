export type ICardFetch = {
  id: number;
  firstName: string;
  lastName: string;
  eyeColor: string;
  gender: string;
  username: string;
  email: string;
  phone: string;
  image: string;
};

export const searchUsers = async (searchField: string) => {
  const searchStr = 'https://dummyjson.com/users/search?q=' + searchField;
  const response = await fetch(searchStr);

  if (!response.ok)
    throw new Error(`Error ${response.status} ${response.statusText || 'ohohoho something wrong'}`);

  const { users } = (await response.json()) as { users: ICardFetch[] };

  return users.map(
    ({ id, firstName, lastName, eyeColor, gender, username, email, phone, image }) => ({
      id,
      firstName,
      lastName,
      eyeColor,
      gender,
      username,
      email,
      phone,
      image,
    })
  );
};

export const getUserById = async (id: string) => {
  const userId = 'https://dummyjson.com/users/' + id;
  const response = await fetch(userId);
  if (!response.ok)
    throw new Error(`Error ${response.status} ${response.statusText || 'ohohoho something wrong'}`);

  const user: ICardFetch = await response.json();

  return user;
};
