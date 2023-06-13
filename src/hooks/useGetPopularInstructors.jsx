import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
const useGetPopularInstructors = () => {
    const { refetch, data : popularInstructors = [] } = useQuery({
        queryKey: ['popularInstructors'],
        queryFn: async () => {
            const response = await axios.get(`https://camp-ninja-server.vercel.app/popular-instructors`)
            return response.data;
          }
          
    })
    return [popularInstructors, refetch]
}

export default useGetPopularInstructors