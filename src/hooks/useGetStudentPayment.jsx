import { useQuery } from '@tanstack/react-query'
import useAuthentication from './useAuthentication'
import useAxiosInterceptor from './useAxiosInterceptor';
const useGetStudentPayment = () => {
    const { user, queryEnabler } = useAuthentication();
    const [axiosBase] = useAxiosInterceptor();
    const { refetch, data : payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: queryEnabler,
        queryFn: async () => {
            const response = await axiosBase(`/payment-history?email=${user?.email}`)
            return response.data;
          }
          
    })
    return [payments, refetch]
}

export default useGetStudentPayment