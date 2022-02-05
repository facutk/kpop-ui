import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('/json').then(r => r.json).then(console.log);
  }, []);
  return (
    <div>
      kpop-ui
    </div>
  );
}

export default App;
