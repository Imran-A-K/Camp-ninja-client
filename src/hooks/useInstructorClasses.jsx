import { useQuery } from '@tanstack/react-query'
import useAuthentication from './useAuthentication'
import useAxiosInterceptor from './useAxiosInterceptor';
const useInstructorClasses = () => {
    const { user, queryEnabler } = useAuthentication();
    console.log(user)
    const [axiosBase] = useAxiosInterceptor();
    const { refetch, data : instructorClasses = [] } = useQuery({
        queryKey: ['instructors-classes', user?.email],
        enabled: queryEnabler,
        queryFn: async () => {
            const response = await axiosBase(`/instructor-classes?email=${user?.email}`)
            return response.data;
          }
          
    })
    return [instructorClasses, refetch]
}

export default useInstructorClasses