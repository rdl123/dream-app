export const fetchIpData = async () => {
    try {
      const response = await fetch('https://api.db-ip.com/v2/free/self');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const ip = data.ipAddress;
      const sum = ip.split('.').reduce((acc, num) => acc + parseInt(num, 10), 0);
      return sum;
    } catch (error) {
      throw new Error(`Failed to fetch IP data: ${error.message}`);
    }
};