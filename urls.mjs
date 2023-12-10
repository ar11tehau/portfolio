import fs from 'fs';
import path from 'path';


// Function to import URLs from a file
function getUrl(filename) {
  const filePath = path.resolve(filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));;
}

// Export the functions you want to use in other files
export { getUrl };

