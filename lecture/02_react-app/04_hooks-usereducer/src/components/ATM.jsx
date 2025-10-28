import React, { useReducer, useState } from "react";

/*
  reducer : 업무 규칙에 따라 일 처리해주는 은행 직원
  state   : 현재 계좌 상태 {accountId: 현재 계좌 번호, balance: 현재 계좌 잔액}
  action  : 고객이 작성한 입금 또는 출금 요청서
  dispatch: 고객이 요청서를 작성한 후 직원을 부르는 기능
*/

function bankReducer(state, action) {
  switch (action.type) {
    case "DEPOSIT":
      return { ...state, balance: state.balance + Number(action.payload) };
    case "WITHDRAW":
      return { ...state, balance: state.balance - Number(action.payload) };
    default:
      return { ...state };
  }
}

function ATM() {
  const [account, dispatch] = useReducer(bankReducer, {
    accountId: "123-456-789",
    balance: 10000,
  });
  const [amount, setAmount] = useState(0);
  return (
    <>
      <h2>현재 계좌 번호 : {account.accountId}</h2>
      <h2>현재 계좌 잔액 : {account.balance}</h2>
      <input
        type="number"
        placeholder="금액"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <br />
      <button
        onClick={() => dispatch({ type: "DEPOSIT", payload: { amount } })}
      >
        입금
      </button>
      <button
        onClick={() => dispatch({ type: "WITHDRAW", payload: { amount } })}
      >
        출금
      </button>
    </>
  );
}

export default ATM;
