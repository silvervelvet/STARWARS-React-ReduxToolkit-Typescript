export interface PersonApiResponse {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  films: string[];
  url: string;
}

export interface PeopleApiResponse {
  results: PersonApiResponse[];
  previous: string | null;
  next: string | null;
}

export const getApiRequest = async (
  url: string
): Promise<PersonApiResponse | PeopleApiResponse> => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const makeConcurrentRequest = async (url: string[]) => {
  const res = await Promise.all(
    url.map((res) => {
      return fetch(res).then((res) => res.json());
    })
  );

  return res;
};
