import { useState, useEffect } from 'react'
import styles from './ShowErrors.module.css'

export function ShowErrors({ message, type }) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!message) {
            setVisible(false)
            return
        }
        setVisible(true)
        const count = setTimeout(() => {
            setVisible(false)
        }, 7000)
        return () => clearTimeout(count)
    }, [message])

    return (
        <> {visible && (
            <p className={`${styles.message}${styles.type}`}>{message}</p>
        )}
        </>
    )
}