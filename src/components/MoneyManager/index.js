import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    income: 0,
    expenses: 0,
    titl: '',
    amt: '',
    typ: 'INCOME',
    list: [],
  }

  titl = event => {
    this.setState({titl: event.target.value})
  }

  amt = event => {
    this.setState({amt: event.target.value})
  }

  typ = event => {
    this.setState({typ: event.target.value})
  }

  onDlt = id => {
    const {list} = this.state

    const delItem = list.find(each => each.id === id)
    if (delItem.typ === 'INCOME') {
      this.setState(prev => ({income: prev.income - Number(delItem.amt)}))
    } else {
      this.setState(prev => ({expenses: prev.expenses - Number(delItem.amt)}))
    }

    const newList = list.filter(each => each.id !== id)
    this.setState({list: newList})
  }

  onSub = event => {
    event.preventDefault()

    const {titl, amt, typ, list} = this.state

    const newItem = {
      id: uuidv4(),
      titl,
      amt,
      typ,
    }

    if (typ === 'INCOME') {
      this.setState(prev => ({income: prev.income + Number(amt)}))
    } else {
      this.setState(prev => ({expenses: prev.expenses + Number(amt)}))
    }

    this.setState({list: [...list, newItem], titl: '', amt: ''})
  }

  render() {
    const {income, expenses, titl, amt, typ, list} = this.state

    return (
      <div className="main-cont">
        <div className="upper-cont">
          <h1 className="name">Hi, Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>

        <MoneyDetails income={income} expenses={expenses} />

        <div className="lower-cont">
          <form className="add-trans-cont" onSubmit={this.onSub}>
            <h1 className="title">Add Transaction</h1>
            <label htmlFor="title">TITLE</label>
            <br />
            <input
              type="text"
              id="title"
              value={titl}
              placeholder="TITLE"
              onChange={this.titl}
            />
            <br />
            <label htmlFor="amt">AMOUNT</label>
            <br />
            <input
              type="number"
              id="amt"
              value={amt}
              placeholder="AMOUNT"
              onChange={this.amt}
            />
            <br />
            <label htmlFor="typ">TYPE</label>
            <br />
            <select id="typ" value={typ} onChange={this.typ}>
              {transactionTypeOptions.map(each => (
                <option value={each.optionId}>{each.displayText}</option>
              ))}
            </select>
            <br />
            <button className="sub-btn" type="submit">
              Add
            </button>
          </form>
          <div className="history-cont">
            <h1 className="title">History</h1>
            <ul className="hist-ul">
              <li className="hist-li title bld">
                <p className="li-titl">Title</p>
              </li>
              <li className="hist-li title bld">
                <p className="li-titl">Amount</p>
              </li>
              <li className="hist-li title bld">
                <p className="li-titl">Type</p>
              </li>
              <li className="hist-li-dlt">{}</li>
            </ul>
            {list.map(each => (
              <TransactionItem
                key={each.id}
                details={each}
                onDlt={this.onDlt}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
