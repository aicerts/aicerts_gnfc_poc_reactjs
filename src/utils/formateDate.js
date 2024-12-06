export function formatDate(date = new Date()) {
    // Check if the input is a string and convert it to a Date object
    if (typeof date === 'string' || typeof date === 'number') {
      date = new Date(date);
    }
    
    // Ensure the input is a valid Date object
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date provided');
    }
  
    const day = String(date.getDate()).padStart(2, '0'); // Day with leading zero
    const month = date.toLocaleString('default', { month: 'short' }); // Short month name
    const year = date.getFullYear(); // Year
    const hours = date.getHours(); // Hours
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Minutes with leading zero
    const ampm = hours >= 12 ? 'PM' : 'AM'; // AM or PM
    const formattedHours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
  
    return `${day}-${month}-${year} ${formattedHours}:${minutes} ${ampm}`;
  }
  