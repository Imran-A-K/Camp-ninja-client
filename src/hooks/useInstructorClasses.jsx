import { useQuery } from '@tanstack/react-query'
import useAuthentication from './useAuthentication'
import useAxiosInterceptor from './useAxiosInterceptor';
const useInstructorClasses = () => {
    const { user, queryEnabler } = useAuthentication();
    const [axiosBase] = useAxiosInterceptor();
    const { refetch, data : instructor = [] } = useQuery({
        queryKey: ['instructors-classes', user?.mail],
        enabled: queryEnabler,
        queryFn: async () => {
            const response = await axiosBase(`/instructor-classes?email=${user?.email}`)
            // console.log(response)
            return response.data;
          }
          
    })
    return [instructor, refetch]
}

export default useInstructorClasses