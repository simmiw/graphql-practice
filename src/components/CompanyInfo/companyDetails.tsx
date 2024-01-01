import useCompanyDetails from '../../hooks/useCompanyDetails'
import styles from './CompanyDetails.module.scss'

const CompanyDetails = () => {
  const { isFeching, error, companyDetails } = useCompanyDetails()

  return (
    <>
      {isFeching && <div>Loading...</div>}
      {error && <div>Please try refreshing the page.</div>}
      <div className={styles.title}>Company Information</div>
      {companyDetails && (
        <ul className={styles.companyDetails}>
          <li>Company CEO:{companyDetails.ceo}</li>
          <li>Company Employees: {companyDetails.employees}</li>
          <li>Founder: {companyDetails.founder}</li>
          <li>HQ: {companyDetails.headquarters.address}</li>
          <li>Launch Sites: {companyDetails.launch_sites}</li>
          <li>Test Sites: {companyDetails.test_sites}</li>
        </ul>
      )}
    </>
  )
}

export default CompanyDetails
