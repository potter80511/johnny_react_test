import { useMemo, useState } from "react"
import Button from "../../Button"
import "./Select.css"

function Select({account, password}) {
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
      <div>account: {account}</div>
      <div>password: {password}</div>
    </div>
  }, [tabindex, account, password])

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

export default Select
