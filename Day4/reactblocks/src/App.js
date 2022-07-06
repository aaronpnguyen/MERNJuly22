import styles from './components/css/styles.module.css'
import Header from './components/header'
import Row from './components/row'
import Navigation from './components/navigation'
import Main from './components/main'
import Subcontent from './components/subcontent'
import Advertisement from './components/advertisement'

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
