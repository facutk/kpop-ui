import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    fetch('https://kpop.dokku.facu.tk/json').then(r => r.json()).then(console.log);
  }, []);

  return (
    <div>
      Home
    </div>
  )
};

export default Home;
