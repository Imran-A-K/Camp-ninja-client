import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

const useGetPopularClasses = () => {
    const { refetch, data : popularClasses = [] } = useQuery({
        queryKey: ['popularClasses'],
        queryFn: async () => {
            const response = await axios.get(`https://camp-ninja-server.vercel.app/popular-classes`)
            return response.data;
          }
          
    })
    return [popularClasses, refetch]
}

export default useGetPopularClasses