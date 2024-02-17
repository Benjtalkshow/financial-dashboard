import './App.css';
import Sidebar from './layout/sidebar/Sidebar';
import Content from './layout/content/Content';

function App() {
  return (
    <>
      <div className='app'>
        <Sidebar />
        <Content />
      </div>
    </>
  )
}

export default App