import useShips from '../../hooks/useShips'
import { useMemo } from 'react'
import Table from '../common/table'

export const Ships = () => {
  const columns = useMemo(
    () => [
      {
        header: 'ID',
        accessorKey: 'id',
      },
      {
        header: 'Ship Name',
        accessorKey: 'name',
      },
      {
        header: 'Ship Type',
        accessorKey: 'type',
      },
    ],
    []
  )
  const { isFetching, error, ships } = useShips()

  return (
    <div>
      {isFetching && <div>Loading...</div>}
      {ships?.length ? (
        <Table
          {...{
            data: ships,
            columns,
          }}
        />
      ) : null}
      {error && <div>Fetching failed, please refresh</div>}
    </div>
  )
}
