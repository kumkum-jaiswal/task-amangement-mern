import {  BrowserRouter,  Routes,  Route} from 'react-router-dom';  
import Home from "./Components/Home";
import UserDashBoard from './Components/UserDashBoard';


import Expense from './Components/Expense';
// import DisplayExpenses from './Components/DisplayExpenses';
// import Display from './Components/Display';
import DisplayEexpenses from './Components/DisplayExpenses';
import Assign from './Components/Assign';


const App=()=>{
  return(
    <>
       <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/Assign' element={<Assign/>}/>
         </Routes>
          <Routes>
             <Route path='/dashboard' element={<UserDashBoard/>}>
             <Route path='expense' element={<Expense/>}/>
             {/* <Route path='displayexpe' element={<DisplayExpenses/>}/> */}
             {/* <Route path='display' element={<Display/>}/> */}
             <Route path='displayexpenses' element={<DisplayEexpenses/>}/>
             
             
             
             </Route>
          </Routes>
       </BrowserRouter>
    </>
  )
}
export default App;