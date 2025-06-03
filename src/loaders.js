import useStore from './persistentStore';
import { redirect } from 'react-router-dom';
import axios from 'axios';
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export async function appLoader() {
  const user = await authLoader();

  if (!user) {
    return redirect('/login');
  }

  const genres = await genresLoader();

  return {
    user,
    genres,
  };
}

export async function authLoader() {
  const user = useStore.getState().user;
  if (!user) {
    return null;
  }
  return user;
}

export async function genresLoader() {
  try {
    const { data } = await axios.get(`/genres`, {
      withCredentials: true,
    });

    return data.genres;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw new Response('Failed to load genres', { status: 500 });
  }
}

export async function loginLoader() {
  const user = useStore.getState().user;
  if (user) {
    return redirect('/');
  }
  return null;
}

export async function booksLoader({ request }) {
  const url = new URL(request.url);
  const page = url.searchParams.get('page') || 1;
  const genre = url.searchParams.get('genre') || '';

  const query = `/books?page=${page}` + (genre && `&genre=${genre}`);

  try {
    const { data } = await axios.get(query);
    return {
      books: data.books,
      page: data.page,
      totalPages: data.totalPages,
    };
  } catch (error) {
    console.error('Error fetching books:', error);
    throw new Response('Failed to load books', { status: 500 });
  }
}
