import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const UseGetAllClasses = () => {
    const { refetch, data : allApprovedClasses = [] } = useQuery({
        queryKey: ['all-Approved-classes'],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:4000/approved-classes`)
            return response.data;
          }
          
    })
    return [allApprovedClasses, refetch]
}

export default UseGetAllClasses