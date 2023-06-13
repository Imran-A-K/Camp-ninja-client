import { useQuery } from '@tanstack/react-query'
import useAuthentication from './useAuthentication'
import useAxiosInterceptor from './useAxiosInterceptor';
const useGetEnrolledClass = () => {
    const { user, queryEnabler } = useAuthentication();
    const [axiosBase] = useAxiosInterceptor();
    const { refetch, data : enrolledClasses = [] } = useQuery({
        queryKey: ['enrolled-classes', user?.email],
        enabled: queryEnabler,
        queryFn: async () => {
            const response = await axiosBase(`/student-enrolled-classes?email=${user?.email}`)
            return response.data;
          }
          
    })
    return [enrolledClasses, refetch]
}

export default useGetEnrolledClass