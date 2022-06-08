import styles from './ShowErrors.module.css';
import { useState, useEffect } from 'react';

function ShowErrors({ changeSetError, message }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!message) {
            setVisible(false);
            return;
        }
        setVisible(true)
        const count = setTimeout(() => {
            setVisible(false);
            changeSetError('')
        }, 7000);
        return () => clearTimeout(count);
    }, [changeSetError, message]);

    return <>{visible && <p className={styles.msg}>{message}</p>}</>;
}

export default ShowErrors;