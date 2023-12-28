import { useMemo } from 'react'
import useLaunches from '../../hooks/useLaunches'
import Table from '../common/table'

export const Launches = () => {
  const columns = useMemo(
    () => [
      {
        header: 'ID',
        accessorKey: 'id',
      },
      {
        header: 'Mission Name',
        accessorKey: 'mission_name',
      },
      {
        header: 'Rocket Name',
        accessorKey: 'rocket.rocket_name',
      },
    ],
    []
  )
  const { isFetching, error, launches } = useLaunches()
  return (
    <div>
      {isFetching && <div>Loading...</div>}
      {launches?.length ? (
        <Table
          {...{
            data: launches,
            columns,
          }}
        />
      ) : null}
      {error && <div>Fetching failed, please refresh</div>}
    </div>
  )
}
