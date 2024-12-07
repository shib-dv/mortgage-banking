import { Routes, Route } from 'react-router-dom';
import AccountSummary from './components/summary/AccountSummary';
import FundTransferDetails from './components/FundTransfer/FundTransferDetails';
import SuccessfulFundTransfer from './components/FundTransfer/SuccessfulFundTransfer';

function App() {

  return ( 
    <Routes>
      {/* <Route path="/account-summary" element={<AccountSummary/>}>
         <Route path=":id" element={<SavingorMortgageAccountDetails/>}/>
      </Route> */}
      <Route path="/fund-transfer" element={<FundTransferDetails/>}/>
      <Route path="successful-transfer" element={<SuccessfulFundTransfer/>} />
    </Routes>
      
  );
}

export default App;


