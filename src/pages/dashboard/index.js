import { useState, useMemo } from 'react';
import "./Dashboard.css"
import AccountInfo from './AccountInfo.js';
import Tabs from './Tabs';

function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [tabindex, setTabIndex] = useState(null)

  const contentDisplay = useMemo(() => {
    if(tabindex === null) {
      return null
    }

    if(tabindex === 0) {
      return <h2>Version: 1.0.2</h2>
    }

    return <AccountInfo />
  }, [tabindex])

  const openClass = isMenuOpen ? ' open' : ''

  return <div className={`Select${openClass}`}>
    <div className="head" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      Select
    </div>
    {isMenuOpen && <div className="menu">
      <Tabs activeIndex={tabindex} onClickTab={(newIndex) => setTabIndex(newIndex)} />
      {/* <div className="tabs">
        <Button text="Version" onClick={() => setTabIndex(0)} backgroundColor="pink" />
        <Button text="AccountInfo" onClick={() => setTabIndex(1)} backgroundColor="pink" />
      </div> */}
      <div className="content">
        {contentDisplay}
      </div>
    </div>}
  </div>
}

export default Dashboard
