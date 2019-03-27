import { StoreState } from 'src/types';
import { EnthusiasmAction } from 'src/actions';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';


export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
  console.log(state.eLevel);
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return {...state, eLevel: state.eLevel + 1};
    case DECREMENT_ENTHUSIASM:
    return {...state, eLevel: Math.max(1,state.eLevel - 1)};
  }
  return state;
}