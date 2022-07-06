import styles from './components/css/styles.module.css'
import Header from './components/Header'
import Row from './components/Row'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Subcontent from './components/Subcontent'
import Advertisement from './components/Advertisement'

function App() {
  return (
    <div className={styles.App}>
      <Header/>
        <Row>
          <Navigation/>
          <Main>
            <Row>
              <Subcontent/>
              <Subcontent/>
              <Subcontent/>
            </Row>
            <Advertisement/>
          </Main>
        </Row>
    </div>
  );
}

export default App;
