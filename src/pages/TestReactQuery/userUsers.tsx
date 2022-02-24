import { useQuery } from 'react-query'

interface User {
  id: number,
  name: string
}

interface Error {
  error: string,
  message: string
}

export function useUser(id: string) {
  return useQuery<User, Error>(['users', id], () => 
    fetch(`http://localhost:4000/api/users/${id}`, { method: 'GET' })
    .then( res => res.json() ) 
  );
}