// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props

  return (
    <div className="det-cont">
      <div className="balance-cont">
        <img
          className="amt-logo"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="det-title">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {income - expenses}
          </p>
        </div>
      </div>

      <div className="income-cont">
        <img
          className="amt-logo"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="det-title">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>

      <div className="expenses-cont">
        <img
          className="amt-logo"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="det-title">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
