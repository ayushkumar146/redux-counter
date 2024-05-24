// src/components/Counter.js
// 4th page to be created is of counter
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../state/action';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

// how does selector fetch data?
// ans:- note:- you have rapped store on the app, so without importing store, any component can directly access store. 
// agr tum ye soch rhe ho ki ye selector kaise directly state ke count ko fetch krle rha h,
//kyuki humne to reducer se isko connect hi nhi kia, to bata dun ki ye reducer se nhi store se le rha h, aur store me tumne reducers dia hua h. aur jo store h, wo sabhi reducers ko collect krke ek state tree banata h, aur jab bhi tum state.{kuch bhi} karoge to wo jo (state) h wo koi partucular component ka state nhi h, wo collective jitne bhi reducers h store me, aur hr reducer ka apna apna kuch state hoga , to wo sabhi state combine hoke ek mega STATE banate, aur whi state baaki component use krte h, to jb humne state.count kia, to idhar sirf ek hi reducer tha jiska state ka variable count that , wo store se directly access hogya.

// how does dispact sends actions to desired reducers?
// In Redux, the dispatch function doesn't directly send actions to specific reducers. Instead, it sends actions to the store, and then the store handles distributing those actions to all relevant reducers.jb ditpach action ko dispatch krta h to wo store me jata h , ab store me to bht sare reducer jo skte h, to store us action ko sabhi reducer ko dedets hm agr wo sare stores us actions ke sath agr kuch krskte h to krdenge nhi to aisa hi chor denge.

export default Counter;
