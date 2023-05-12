

import PDF from './components/pdf';
import Pdv from './components/pdv';
import MyForm  from './components/carte';
import Sim from './components/sim';
import Stock  from './components/stock';
import DetailsListeProduit  from './components/detailproduct';
import DetailsListeProduitRecharge  from './components/detailcarterecharge';
import LoginPage from './components/loginPage/index'
import Navbar from './components/navbar';
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";






function App() {

  const [respons , setresponse] = useState();
  // const isAuth = Boolean(useSelector((state) => state.token));
  const getData =(data1 , data2 , data3  )=> { 
 setresponse(data1)
   
  return ( 
    <> 
    </>
  )

}
  return (
   
   <BrowserRouter> 
      <Routes>
     {/* creation des routes de l'application  */}
     <Route path="/home" element={<Pdv />}/>
     
         <Route path="sim" element={<Sim />} />
         <Route path="carte" element={<MyForm  />} />
         <Route path="pdf" element={<PDF  />} />
         <Route path="stock" element={<Stock  />} />
         <Route path="detail" element={< DetailsListeProduit />} />
         <Route path="detailcarte" element={< DetailsListeProduitRecharge />} />
         <Route path="/form" element={<LoginPage />} />
          
        
        
       </Routes>
     </BrowserRouter>







  );
}

export default App;
