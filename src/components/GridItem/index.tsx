import { Level } from '../../helpers/imc';
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    item: Level
};

export const GridItem = ({ item }: Props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gridIcon}>
                {item.icon === 'up' && <img src={upImage} alt="" width="30px" />}
                {item.icon === 'down' && <img src={downImage} alt="" width="30px" />}
            </div>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.yourImc &&
                <div className={styles.yourImc}>Seu iMC é de {item.yourImc}</div>
            }
            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]} kg/m²</strong>
                </>
            </div>
        </div>
    )
}

//<img src={item.icon === 'up' ? upImage : downImage} alt="" width="30" />