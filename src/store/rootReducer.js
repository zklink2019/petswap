
import { createSlice } from '@reduxjs/toolkit';
import petData from './pets.json'
import rankData from './rank.json'

const initSlice = createSlice({
  name: 'init',
  initialState: {
    petData,
    rankData,
    init_address:"aleo10r0ghwyh0uvurq3w5skdnd5ar4wxc8g4wjcfwxv8zn2dr3xd3qysam6u4v",
    publicAddress: "",
    init_food: {},
    contract_record: [],
  },
  reducers: {
    setPublicAddress(state, action) { 
      state.publicAddress = action.payload;
    },
    setInitFood(state, action) { 
      state.init_food = action.payload;
    },
    setpetData(state, action) {
      console.log(state);
      console.log(action)
      state.petData = {
        ...state.petData,
        ...action.payload
      };
    },
    setContractRecord(state, action) { 
      state.contract_record = action.payload;
    },
  },
  extraReducers: (builder) => {
  },
});



export const { setPublicAddress,setpetData,setInitFood,setContractRecord } = initSlice.actions
export const getPublicAddress = (state) => state.publicAddress;
export const getPetData = (state) => { 
  return state.petData;
} 
export const getRankData = (state) => { 
  return state.rankData;
}
export default initSlice.reducer;




// const initState = {
//     posts: [],
//     init_val: "aleo10r0ghwyh0uvurq3w5skdnd5ar4wxc8g4wjcfwxv8zn2dr3xd3qysam6u4v",
//     publicAddress:"",
// }
 
// // 创建rootReducer函数，接受两个值，第一个值为状态(如果不初始化state，那么state的初始值为underfunded)，第二个值为状态，
// const rootReducer = (state = initState, action) => {
//   // reducer的作用就是返回新的状态值
//     console.log(state, action);
//     // if (action.type === 'change_publicAddress') { 
//     //   // state.publicAddress=
//     //    const newState = JSON.parse(JSON.stringify(state));
//     //    newState.publicAddress = action.value; // 将新的value值赋值给newState
//     //     return newState;
//     // }
//    switch (action.type) {
//      case 'change_publicAddress': {
//         let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
//         newState.publicAddress = action.value
//         return newState;
//       // return [
//       //   ...tasks,
//       //   {
//       //     id: action.id,
//       //     text: action.text,
//       //     done: false,
//       //   },
//       // ];
//     }
//     // case 'changed': {
//     //   return tasks.map((t) => {
//     //     if (t.id === action.task.id) {
//     //       return action.task;
//     //     } else {
//     //       return t;
//     //     }
//     //   });
//     // }
//     // case 'deleted': {
//     //   return tasks.filter((t) => t.id !== action.id);
//     // }
//     // default: {
//     //   throw Error('未知 action：' + action.type);
//     // }
//   }
//   // return state
// }
 
// // 输出rootReducer组件
// export default rootReducer;