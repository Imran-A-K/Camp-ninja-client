import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import useAuthentication from './useAuthentication'
import useAxiosInterceptor from './useAxiosInterceptor';
const useInstructorClasses = () => {
    const { user } = useAuthentication();
    const [axiosBase] = useAxiosInterceptor();
    const { refetch, data : instructor = [] } = useQuery({
        
    })
}

export default useInstructorClasses