const NEW_DONUT_ORDER = 'NEW_DONUT_ORDER'

const HANDLE_FIELD_CHANGE = 'HANDLE_FIELD_CHANGE'

const CLEAR_FORM = 'CLEAR_FORM'


const handleFieldChange = (event) => {
  const newValue = event.target.value
  const field = event.target.name
  return {
    type: HANDLE_FIELD_CHANGE,
    field,
    newValue
  }
}

const addNewDonutOrder = (donutOrder) => {
  return {
    type: NEW_DONUT_ORDER,
    donutOrder
  }
}

const clearForm = () => {
  return {
    type: CLEAR_FORM
  }
}

const initialState = {
  name: '',
  flavor: '',
  donutOrderList: [
    {
      id: 1,
      name: 'Brianna',
      flavor: 'Everything Bagel Doughnut'
    },
    {
      id: 2,
      name: "Alex",
      flavor: 'Blackberry Hibiscus'
    },
    {
      id: 3,
      name: 'Dan',
      flavor: 'The biggest coffee roll ever'
    }
  ]
}

const donuts = (state = initialState, action) => {
  switch(action.type) {
    case NEW_DONUT_ORDER:
      const newDonuts = state.donutOrderList.concat(action.donutOrder)
      return {...state, donutOrderList: newDonuts}
    case CLEAR_FORM:
      return {...state, name: '', flavor: ''}
    case HANDLE_FIELD_CHANGE:
      return {...state, [action.field]: action.newValue}
    default:
      return state
  }
};

export {
  donuts,
  addNewDonutOrder,
  handleFieldChange,
  clearForm
};
