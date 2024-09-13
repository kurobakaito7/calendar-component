import React, { useState } from 'react';
import Calendar from './Calendar';
import dayjs from 'dayjs';

function App() {
  const [value, setValue] = useState(dayjs(Date.now()))
  return (
    <div className="App">
      {/* 国际化可加上 locale属性 locale='en-US' */}
      {/* defaultValue非受控模式 */}
      {/* <Calendar defaultValue={dayjs('2024-9-13')}></Calendar> */}
      {/* value受控模式 */}
      <Calendar value={value} onChange={(val) => { setValue(val) }}></Calendar>
    </div>
  );
}

export default App;
