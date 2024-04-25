import styles from './mainPage.module.css';
import { Sidebar } from '../sidebar/Sidebar';

function MainPage() {
    return (
        <div className={styles.gridContainer}>
            <Sidebar />
        </div>
    );
}

export default MainPage;
