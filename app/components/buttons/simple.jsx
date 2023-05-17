'use client'

export default function SimpleButton({ children, text, styles = {}, onClick = false }) {
    return <button onClick={onClick} style={styles}>{children || text}</button>;
}
  