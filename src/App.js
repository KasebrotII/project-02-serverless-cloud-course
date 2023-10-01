import './App.css';
import { Addition } from './Addition';
import { Subtraction } from './Subtraction';
import { Division } from './Division';
import { Multiplication } from './Multiplication';

const App = () => {

  const styles = {
    container: {
        margin: '0',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    box: {
      borderStyle: 'solid',
      marginRight: '20%',
      marginLeft: '20%',
      marginTop: '3%',
      marginBottom: '3%',
    }
  };

  return (
      <div style={styles.container}>
          <div style={styles.box}>
              <h2>Addition</h2>
                  <Addition numberOne={5} numberTwo={4} />
                  <Addition numberOne={24} numberTwo={17} />
                  <Addition numberOne={33} numberTwo={1} />
          </div>

          <div style={styles.box}>  
              <h2>Subtraction</h2>
                  <Subtraction numberOne={4} numberTwo={8} />
                  <Subtraction numberOne={45} numberTwo={17} />
                  <Subtraction numberOne={30} numberTwo={5} />
          </div>

          <div style={styles.box}>
              <h2>Division</h2>
                  <Division numberOne={23} numberTwo={3} />
                  <Division numberOne={55} numberTwo={4} />
                  <Division numberOne={17} numberTwo={7} />
          </div>

           <div style={styles.box}>
              <h2>Multiplication</h2>
                  <Multiplication numberOne={12} numberTwo={5} />
                  <Multiplication numberOne={9} numberTwo={7} />
                  <Multiplication numberOne={77} numberTwo={7} />
          </div>
      </div>
    );
}

export default App;
