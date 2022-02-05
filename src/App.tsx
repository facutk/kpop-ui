import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('https://kpop.dokku.facu.tk/json').then(r => r.json).then(console.log);
  }, []);
  return (
    <div>
      ui kpop
    </div>
  );
}

export default App;
