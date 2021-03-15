import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js'
import Navbar2 from './components/Navbar';
import Header from './components/Header';
function App() {
  return (
    <>
      <Particles
        className='canvas-particle'
        params={{
          particles: {
            number:{
              value:30,
              density: {
                enable:true,
                value_area: 900
              }
            },
            shape: {
              type:'circle',
              stroke: {
                width:6,
                color:'f9ab00'
              }
            },
          }
        }}
      />
      <Navbar2/>
      <Header/>
    </>
  );
}

export default App;
