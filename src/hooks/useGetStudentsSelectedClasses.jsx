import { useQuery } from '@tanstack/react-query'
import useAuthentication from './useAuthentication'
import useAxiosInterceptor from './useAxiosInterceptor';
const useGetStudentsSelectedClasses = () => {
    const { user, queryEnabler } = useAuthentication();
    const [axiosBase] = useAxiosInterceptor();
    const { refetch, data : selectedClasses = [] } = useQuery({
        queryKey: ['students-selected-classes', user?.email],
        enabled: queryEnabler,
        queryFn: async () => {
            const response = await axiosBase(`/students-selected-classes?email=${user?.email}`)
            return response.data;
          }
          
    })
    return [selectedClasses, refetch]
}

export default useGetStudentsSelectedClasses