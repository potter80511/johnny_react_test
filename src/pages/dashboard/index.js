import { useContext, useState, useMemo } from 'react';
import { LoginDataContext } from '../../hooks/useUser.js'
import Button from "../../components/Button"
import "./Dashboard.css"

function Dashboard() {
  const { loginData } = useContext(LoginDataContext)

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [tabindex, setTabIndex] = useState(null)

  const contentDisplay = useMemo(() => {
    if(tabindex === null) {
      return null
    }

    if(tabindex === 0) {
      return "version: 1.0.2"
    }

    return <div className="account-info">
      <div>account: {loginData.account}</div>
      <div>password: {loginData.password}</div>
    </div>
  }, [tabindex, loginData])

  return <div className="Select">
    <div className="head" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      Select
    </div>
    {isMenuOpen && <div className="menu">
      <div className="tabs">
        <Button text="Version" onClick={() => setTabIndex(0)} backgroundColor="pink" />
        <Button text="AccountInfo" onClick={() => setTabIndex(1)} backgroundColor="pink" />
      </div>
      <div className="content">
        {contentDisplay}
      </div>
    </div>}
  </div>
}

export default Dashboard
