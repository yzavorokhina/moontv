import _ from 'lodash';
import '../scss/fonts.scss';
import '../scss/main.scss';
import '../scss/home.scss';
import '../scss/components/_banner.scss';
import { createRoot } from 'react-dom/client';
import db from '../db/dbHelper';
import App from './components/App';

const body = document.getElementById('react-body');
const rootBody = createRoot(body);
rootBody.render(<App db={db} route={"HomePage"} />);
// rootBody.render(<App db={db} />);

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );