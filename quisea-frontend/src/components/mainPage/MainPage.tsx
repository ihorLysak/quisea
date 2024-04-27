import styles from './mainPage.module.css';
import { Sidebar } from '../sidebar/Sidebar';
import { QuizesWindow } from '../quizesContainer/QuizesWindow';
import { useState } from 'react';
import { NewTaskModal } from '../newTaskModal/NewTaskModal';

export function MainPage() {
    const [isModalOpened, setModalOpened] = useState(true);

    return (
        <div className={styles.gridContainer}>
            {isModalOpened && <NewTaskModal />}
            <Sidebar />
            <QuizesWindow />
        </div>
    );
}
