import './AccountSummary.css';
import { useNavigate } from 'react-router';

function AccountSummary() {
     const accountTypes = ["Saving Account", "Mortgage Account"];
     const navigate = useNavigate();

     function navigateScreen(type) {
         if(type === "Saving Account") {
            navigate("/account-summary/saving-account");
         } else {
            navigate("/account-summary/mortgage-account");
         }
     }

     return (
        <>
        <div>
            <ul>
        {accountTypes.map((type, index) => 
          <li className="list-style" key="index" onClick={() => {navigateScreen(type)}}> 
              {type} 
          </li>
        )}
        </ul> 
        </div>
        </>
     );
}

export default AccountSummary;