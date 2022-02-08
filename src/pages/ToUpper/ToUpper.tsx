import { useState } from 'react';

import Button from '@/ui-kit/Button';
import Input from '@/ui-kit/Input';

import { Card, Center, Spacer } from './ToUpper.styles';

const ToUpper = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: any) => setInputValue(e.target.value);

  const handleToUpper = (e: any) => {
    e.preventDefault();
    fetch(`https://kpop.dokku.facu.tk/toupper?str=${inputValue}`).then(r => r.text()).then(setInputValue);
  }

  return (
    <Center>
      <Card>
        <form onSubmit={handleToUpper}>
          <Input value={inputValue} onChange={handleInputChange} />
          <Spacer />
          <Button type="submit">
            to uppercase
          </Button>
        </form>
      </Card>
    </Center>
  );
}

export default ToUpper;
