const tabsData = ['Version', 'AccountInfo']

function Tabs({activeIndex, onClickTab}) {
  return <div className="tabs">
    {tabsData.map((name, index) => <button
      type="button"
      key={name}
      className={`tab${activeIndex === index ? ' active' : ''}`}
      onClick={() => onClickTab(index)}
    >{name}</button>)}
  </div>
}

export default Tabs
