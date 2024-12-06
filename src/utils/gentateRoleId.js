// Utility function to generate a unique roleId
export const generateRoleId = (role) => {
    // Define prefixes for each role
    const rolePrefixes = {
      Admin: "AD",
      Leaser: "LS",
      Distributor: "DI",
      Retailer: "RE",
      Stockiest: "ST",
    };
  
    // Get the prefix for the role, or fallback to a default prefix
    const prefix = rolePrefixes[role] || "XX";
  
    // Generate a unique ID (e.g., using timestamp + random number for simplicity)
    const uniqueId = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
  
    // Return the final roleId
    return `${prefix}${uniqueId}`;
  };
  