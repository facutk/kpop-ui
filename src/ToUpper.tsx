import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '@/ui-kit/Button';
import Input from '@/ui-kit/Input';

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  display: inline-block;
  padding: 1em;
  margin: 1em;
  border-radius: 0.5em;
  border: 1px solid #eeeeee;
  width: 400px;
`;

const Spacer = styled.div`
  width: 1em;
  height: 1em;
`

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
