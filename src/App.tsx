import styles from './App.module.scss'
import useLaunches, { Launch } from './hooks/useLaunches'

function App() {
  const { isFetching, error, launches } = useLaunches()

  return (
    <div className={styles.App}>
      {isFetching && <div>Loading...</div>}
      {error && <div>Fetching failed, please refresh</div>}
      {launches?.map((launch: Launch) => {
        return <div key={launch.id}>{launch.mission_name}</div>
      })}
    </div>
  )
}

export default App
