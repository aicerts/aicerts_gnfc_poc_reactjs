import React, { createContext, useState } from 'react';

// Create a Context
export const ApiDataContext = createContext();

// Create a provider component
export const ApiDataProvider = ({ children }) => {
  const [apiData, setApiData] = useState({
    Details: {
      "Delivery No": null, // Added
      "Royalty Pass No": null,
      "Leaser ID": null,
      "Issued Date": null,
      "Valid Upto": null,
      "SSP Number": null,
      "Village": null,
      "Taluke": null,
      "District": null,
      "Mineral Name": null,
      "Mineral Grade": null,
      "Initial Quantity": null,
      "Journey Start Date": null,
      "Journey End Date": null,
      "Distance": null,
      "Duration": null,
      "Driver Name": null,
      "Driver License No": null,
      "Driver Mobile No": null,
      "Vehicle Type": null,
      "Vehicle Number": null,
      "Weighbridge Name": null,
      "Destination": null,
      "Address": null,
      "Transaction Hash": null,
      "URL": null,
      "QRData": null,
      "Transportation Mode":null,
                "Transportation Distance":null,
                "Buyer Id": null,
                "Buyer Name": null,
                "Buyer Address": null,
                "Survey No":null,
                "Comment":null
                
    },
    message: null,
    type:null
  });
  

  return (
    <ApiDataContext.Provider value={{ apiData, setApiData }} >
      {children}
    </ApiDataContext.Provider>
  );
};



