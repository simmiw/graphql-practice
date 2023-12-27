import useLaunches, { Launch } from '../../hooks/useLaunches'

export const Launches = () => {
  const { isFetching, error, launches } = useLaunches()
  return (
    <div>
      {isFetching && <div>Loading...</div>}
      {error && <div>Fetching failed, please refresh</div>}
      {launches?.map((launch: Launch) => {
        return <div key={launch.id}>{launch.mission_name}</div>
      })}
    </div>
  )
}
