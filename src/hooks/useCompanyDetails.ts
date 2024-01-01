import { gql, useQuery } from '@apollo/client'

export type CompanyDetails = {
  ceo: string
  employees: number
  founder: string
  headquarters: {
    address: string
    city: string
    state: string
  }
  launch_sites: number
  test_sites: number
}

const GET_COMPANY_DETAILS = gql`
  query Company {
    company {
      ceo
      employees
      founder
      headquarters {
        address
        city
        state
      }
      launch_sites
      test_sites
    }
  }
`

const useCompanyDetails = () => {
  const { loading, data, error } = useQuery(GET_COMPANY_DETAILS)

  return {
    isFeching: loading,
    companyDetails: data?.company,
    error,
  }
}

export default useCompanyDetails
