import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './FundTransferDetails.css'

function FundTransferDetails() {
    const fundDetailsURL = "";
    const transactionURL = "";
    // const [fundDetails, setFundDetails] = useState({});
    const [transferAmount, setTransformAmount] = useState("");
    const [remarks, setRemarks] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const  fundDetails = [{"savingAccoucreated_at":"2024-12-07 02:13:56","customer_id":"CUST001",
        "id":"5028293897","interest_rate":0.0,"loan_amount":0.0,"tenure":0.0}, "mortgageAccountDetails":{"account_name": "Mortagages Account 210",
            "account_type": "mortgage",
            "balance": 1692.09,
            "created_at": "2024-12-07 02:13:56",
            "customer_id": "CUST002",
            "id": "1452367389",
            "interest_rate": 0,
            "loan_amount": 0,
            "tenure": 0}}];
    let savingAccountDetail = fundDetails[0].savingAccountDetails , mortgageAccountDetails = fundDetails[0].mortgageAccountDetails;
    const navigate = useNavigate();

    // useEffect(() => {
    //     fetch(fundDetailsURL, {
    //     method: "GET",    
    //     headers: {
    //         "Content-Type": "application/json"
    //     }}).then((res) => {
    //         savingAccountDetail = res[0].savingAccountDetails;
    //         mortgageAccountDetails = res[0].mortgageAccountDetails;
    //         setFundDetails(res);
    //     });
    // }, []);
    function onAmountChange(event) {
        setTransformAmount(event.target.value);
    }

    function onRemarkChange(event) {
        setRemarks(event.target.change);
    }

    function transferFund(event) {
       let fundTransferDetails = {};
   
       if(!transferAmount || !remarks) {
          setErrorMessage("Please fill the mandatory fields.")  
       }

       fundTransferDetails["senderAccNo"] = fundDetails.senderAccNo;
       fundTransferDetails["payeeAccNo"] = fundDetails.payeeAccNo;
       fundTransferDetails["amount"] = transferAmount;
       fundTransferDetails["remarks"] = remarks;

       fetch(transactionURL, {
         method: "POST",
         headers: {
                    "Content-Type": "application/json"
                  },
         body: JSON.stringify(fundTransferDetails)         
       }).then((res) => {
          navigate(); 
       });
    }

    return (
        <>
         <div className="formLayout">
            <h2>Transfer fund</h2>   
            <form> 
                <div className="form-row">
                    <label for="senderAccNo">Accountholder Account Number:</label>
                    <input id="senderAccNo" type="text" value={savingAccountDetail && savingAccountDetail.id} disabled />
                </div>
                <div className="form-row">
                    <label for="payeeAccNo">Payee Account Number:</label>
                    <input id="payeeAccNo" type="text" value={mortgageAccountDetails && mortgageAccountDetails.id} disabled />
                </div>
                <div className="form-row">
                    <label for="ammount"><span className="astrik">*</span>Amount:</label>
                    <input id="amout" type="text" value={transferAmount} required onChange={onAmountChange} />
                </div>
                <div className="form-row">
                    <label for="remarks"><span className="astrik">*</span>Remarks:</label>
                    <input id="remarks" type="text" value={remarks} required onChange={onRemarkChange} />
                </div>
                {errorMessage && <div className="errorMsg"> {errorMessage} </div>}
                <button type="submit" onClick={transferFund}>Proceed</button>
            </form>
            </div>
        </>
    );
}

export default FundTransferDetails;