import { useEffect, useState } from 'react';

import quotationsService from './services/quotations';

import Table from './components/Table';

function App() {
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    quotationsService.getQuotations().then((quotations) => console.log(quotations));
  }, []);

  return <Table />;
}

export default App;
