import { useQuery } from '@tanstack/react-query'
import useAuthentication from './useAuthentication'
import useAxiosInterceptor from './useAxiosInterceptor';
const useGetClasses = () => {
    const { user, queryEnabler } = useAuthentication();
    const [axiosBase] = useAxiosInterceptor();
    const { refetch, data : allClasses = [] } = useQuery({
        queryKey: ['all-Classes', user?.email],
        enabled: queryEnabler,
        queryFn: async () => {
            const response = await axiosBase(`/classes`)
            return response.data;
          }
          
    })
    return [allClasses, refetch]
}

export default useGetClasses