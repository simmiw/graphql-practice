import { gql, useQuery } from '@apollo/client'

export type Ship = {
  id: string
  name: string
  successful_landings: number | null
  weight_kg: number | null
  speed_kn: number | null
  imo: number
}

const GET_SHIPS = gql`
  query ShipsQuery {
    ships {
      id
      name
      successful_landings
      weight_kg
      speed_kn
      imo
    }
  }
`

const useShips = () => {
  const { loading: isFetching, error, data } = useQuery(GET_SHIPS)
  return {
    isFetching,
    error,
    ships: data?.ships,
  }
}

export default useShips
