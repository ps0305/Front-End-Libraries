```js
console.clear();

// people dropping off a form(action)

const createPolicy = (name, amount) => {
  return { // Action
   type: 'CREATE_POLICY',
   payload: {
     name: name,
     amount: amount
   }
 };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};

// Reducers

const claimHistory = (oldListOfClaims=[], action) => {
  if (action.type === 'CREATE_CLAIM') {
    // we care about this action
    return [...oldListOfClaims, action.payload];
  }
  // we don't care about the action
  return oldListOfClaims
}

const accounting = (bagOfMoney=100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney
};

const policies = (listOfPolicies=[], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  return listOfPolicies;
}

const { createStore, combineReducers } = Redux;
const ourDepartment = combineReducers({
  accounting: accounting,
  claimHistory: claimHistory,
  policies: policies
})

// Testing our examples
const store = createStore(ourDepartment);

store.dispatch(createPolicy('Pankaj', 20))
store.dispatch(createPolicy('Rohan', 40))

store.dispatch(createPolicy('Austin', 30))
store.dispatch(createClaim('Pankaj', 50))
store.dispatch(deletePolicy('Rohan'))


console.log(store.getState())
```
