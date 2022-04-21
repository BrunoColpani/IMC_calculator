import React, { useState } from 'react';
import poweredImage from './assets/powered.png';
import leftArrowImage from './assets/leftarrow.png';
import styles from './App.module.css';

import { levels, calculateImc, Level } from './helpers/imc';
import { GridItem } from './components/GridItem';


const App = () => {
  const [heightFiled, setHeightFiled] = useState<number>(0);
  const [weightFiled, setWeightFiled] = useState<number>(0);
  const [showItem, setShowItem] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if (heightFiled && weightFiled) {
      setShowItem(calculateImc(heightFiled, weightFiled))
    } else {
      alert('Digite todos os campos.')
    }
  }

  const handleBackButton = () => {
    setShowItem(null);
    setHeightFiled(0);
    setWeightFiled(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width="150px" />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC.</h1>
          <p>IMC é a sigla para índice de Massa Corpórea, parâmetro adotado pela Organização Mundial
            de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input
            type="number"
            placeholder='Digite a sua altura. Ex: 1.5 (em metros)'
            value={heightFiled > 0 ? heightFiled : ""}
            onChange={e => setHeightFiled(parseFloat(e.target.value))}
            disabled={showItem ? true : false}
          />

          <input
            type="number"
            placeholder='Digite o seu peso. Ex: 83.5 (em Kg)'
            value={weightFiled > 0 ? weightFiled : ""}
            onChange={e => setWeightFiled(parseFloat(e.target.value))}
            disabled={showItem ? true : false}
          />

          <button onClick={handleCalculateButton} disabled={showItem ? true : false}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!showItem &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {showItem &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={showItem} />
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
