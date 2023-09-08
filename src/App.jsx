import { createRoot } from 'react-dom';
import Pet from './Pet';

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name='Sofiberto' animal='Cat' breed='Orange' />
    <Pet name='Chuy Alberto' animal='Cat' breed='Orange' />
    <Pet name='Chikistrikis' animal='Cat' breed='Mixed'/>
  </div>
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
