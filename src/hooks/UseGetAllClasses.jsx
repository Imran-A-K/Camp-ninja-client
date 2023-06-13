import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const UseGetAllClasses = () => {
    const { refetch, data : allApprovedClasses = [] } = useQuery({
        queryKey: ['all-Approved-classes'],
        queryFn: async () => {
            const response = await axios.get(`https://camp-ninja-server.vercel.app/approved-classes`)
            return response.data;
          }
          
    })
    return [allApprovedClasses, refetch]
}

export default UseGetAllClasses