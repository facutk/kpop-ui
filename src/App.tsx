import React, { useEffect } from 'react';
import Button from '@/ui-kit/Button';

function App() {
  useEffect(() => {
    fetch('https://kpop.dokku.facu.tk/json').then(r => r.json).then(console.log);
  }, []);
  return (
    <div>
      <Button>
        ui kpop
      </Button>
    </div>
  );
}

export default App;
