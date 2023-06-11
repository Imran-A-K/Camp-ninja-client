import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const useGetInstructors = () => {
    const { refetch, data : allInstructors = [] } = useQuery({
        queryKey: ['all-Instructors'],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:4000/instructors`)
            return response.data;
          }
          
    })
    return [allInstructors, refetch]
}

export default useGetInstructors