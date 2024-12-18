This solution uses `response.blob()` to get the whole response as a Blob, and then `FileReader` to read it asynchronously before processing. This ensures that the complete data is available before being parsed.

```javascript
async function fetchData() {
  const response = await fetch('YOUR_API_ENDPOINT');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const blob = await response.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsText(blob);
  });
}

fetchData()
  .then(data => {
    // Process the complete data here
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
```