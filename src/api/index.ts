export type ICardFetch = {
  id: number;
  firstName: string;
  lastName: string;
  eyeColor: string;
  gender: string;
  username: string;
  email: string;
  image: string;
};

export const searchUsers = async (searchField: string) => {
  const str = 'https://dummyjson.com/users/search?q=' + searchField;
  const response = await fetch(str);
  console.log('searchField', searchField);

  if (!response.ok)
    throw new Error(`Error ${response.status} ${response.statusText || 'ohohoho something wrong'}`);

  const { users } = (await response.json()) as { users: ICardFetch[] };

  return users.map(({ id, firstName, lastName, eyeColor, gender, username, email, image }) => ({
    id,
    firstName,
    lastName,
    eyeColor,
    gender,
    username,
    email,
    image,
  }));
};

export const getUsers = async () => {
  const response = await fetch('https://dummyjson.com/users?limit=40');

  if (!response.ok)
    throw new Error(`Error ${response.status} ${response.statusText || 'ohohoho something wrong'}`);

  const { users } = (await response.json()) as { users: ICardFetch[] };

  return users.map(({ id, firstName, lastName, eyeColor, gender, username, email, image }) => ({
    id,
    firstName,
    lastName,
    eyeColor,
    gender,
    username,
    email,
    image,
  }));
};
