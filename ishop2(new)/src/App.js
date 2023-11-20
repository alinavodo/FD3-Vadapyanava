
import Goods from './Goods';


import goods from './goods.json'
function App() {
  return (
    <Goods key='Goods' goods = {goods} 
                    startWorkMode = {0}
    />
  );
}

export default App;
