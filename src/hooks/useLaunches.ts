import { gql, useQuery } from '@apollo/client'

export type Launch = {
  id: string
  mission_name: string
}

const GET_LAUNCHES = gql`
  query MissionsQuery {
    launches {
      id
      mission_id
      mission_name
      rocket {
        rocket_name
      }
      launch_year
      launch_site {
        site_id
        site_name
      }
    }
  }
`
const useLaunches = () => {
  const { loading: isFetching, error, data } = useQuery(GET_LAUNCHES)
  return {
    isFetching,
    error,
    launches: data?.launches,
  }
}

export default useLaunches
