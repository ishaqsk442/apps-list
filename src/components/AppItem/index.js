// Write your code here

import './index.css'

const AppItem = props => {
  const {appDetails} = props

  const {imageUrl, appName} = appDetails

  return (
    <li className="list">
      <img alt={appName} className="img" src={imageUrl} />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
