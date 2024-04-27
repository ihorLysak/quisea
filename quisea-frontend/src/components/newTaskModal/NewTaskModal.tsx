import styles from './newTaskModal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export function NewTaskModal() {
    return (
        <div className={styles.background}>
            <div className={styles.card}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
        </div>
    );
}
