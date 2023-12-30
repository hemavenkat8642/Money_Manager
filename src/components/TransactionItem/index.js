// Write your code here

import './index.css'

const TransactionItem = props => {
  const {details, onDlt} = props
  const {id, titl, amt, typ} = details

  const onDltBtn = () => {
    onDlt(id)
  }

  return (
    <ul className="hist-ul">
      <li className="hist-li title">{titl}</li>
      <li className="hist-li title">Rs {amt}</li>
      <li className="hist-li title">
        {typ.charAt(0).toUpperCase() + typ.slice(1).toLowerCase()}
      </li>
      <li className="hist-li-dlt">
        <button type="button" onClick={onDltBtn} className="dlt-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="dlt-img"
          />
        </button>
      </li>
    </ul>
  )
}

export default TransactionItem
