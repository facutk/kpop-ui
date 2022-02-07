import React, { useEffect } from 'react';

import ToUpper from './ToUpper';

function App() {
  useEffect(() => {
    fetch('https://kpop.dokku.facu.tk/json').then(r => r.json()).then(console.log);
  }, []);

  return (
    <div>
      <ToUpper />
    </div>
  );
}

export default App;
