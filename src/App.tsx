import React, { useEffect, useState } from 'react';
import Button from '@/ui-kit/Button';
import Input from '@/ui-kit/Input';

function App() {
  useEffect(() => {
    fetch('https://kpop.dokku.facu.tk/json').then(r => r.json()).then(console.log);
  }, []);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e : any) => setInputValue(e.target.value);

  const handleToUpper = () => {
    fetch(`https://kpop.dokku.facu.tk/toupper?str=${inputValue}`).then(r => r.text()).then(setInputValue);
  }

  return (
    <div>
      <Input value={inputValue} onChange={handleInputChange} />
      <Button onClick={handleToUpper}>
        to uppercase
      </Button>
    </div>
  );
}

export default App;
