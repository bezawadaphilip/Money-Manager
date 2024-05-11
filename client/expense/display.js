// Write your code here
// import './index.css'
import React, {useEffect, useState} from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 800,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  title2: {
    padding:`32px ${theme.spacing(2.5)}px 2px`,
    color: '#2bbd7e'
  },
  totalSpent: {
    padding: '50px 40px',
    fontSize: '4em',
    margin: 20,
    marginBottom: 30,
    backgroundColor: '#01579b',
    color: '#70f0ae',
    textAlign: 'center',
    borderRadius: '50%',
    border: '10px double #70f0ae',
    fontWeight: 300
  },
  categorySection: {
    padding: 25,
    paddingTop: 16,
    margin: 'auto'
  },
  catDiv: {
    height: '4px',
    margin: '0',
    marginBottom: 8
  },
  val: {
    width: 200,
    display: 'inline-table',
    textAlign: 'center',
    margin: 2
  },
  catTitle: {
    display: 'inline-block',
    padding: 10,
    backgroundColor: '#f4f6f9'
  },
  catHeading: {
    color: '#6b6b6b',
    fontSize: '1.15em',
    backgroundColor: '#f7f7f7',
    padding: '4px 0'
  },
  spent: {
    margin: '16px 10px 10px 0',
    padding: '10px 30px',
    border: '4px solid #58bd7f38',
    borderRadius: '0.5em'
  },
  day: {
    fontSize: '0.9em',
    fontStyle: 'italic',
    color: '#696969'
  }
}))

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount} = props
  const classes = useStyles()

  return (
    <>
    <div style={{display: "flex",justifyContent:'space-evenly', alignItems:'center'}}>
      <div style={{display: "flex",justifyContent:'space-between', alignItems:'center',width:"300px",border:"2px solid green",padding:"10px",borderRadius:"20px"}}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="details-img"
          style={{width:"100px",height:"100px"}}
        />
        <div>
        <Typography component="span" className={classes.val} style={{color:'#002f6c', fontSize:'1em', backgroundColor: '#eafff5', padding: '8px 0'}}>Your Balance</Typography>
        <Typography component="span" className={classes.val} style={{color:'#595555', fontSize:'1.15em'}}>&#8377;{balanceAmount}</Typography>
         
        </div>
      </div>
      <div style={{display: "flex",justifyContent:'space-between', alignItems:'center',width:"300px",border:"2px solid #27bdc4",padding:"10px",borderRadius:"20px"}}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="details-img"
          style={{width:"100px",height:"100px"}}
        />
        <div>
        <Typography component="span" className={classes.val} style={{color:'#002f6c', fontSize:'1em', backgroundColor: '#eafff5', padding: '8px 0'}}>Your Income</Typography>
        <Typography component="span" className={classes.val} style={{color:'#595555', fontSize:'1.15em'}}>&#8377;{incomeAmount}</Typography>
         
        </div>
      </div>
    </div>
    </>
  )
}

export default MoneyDetails
