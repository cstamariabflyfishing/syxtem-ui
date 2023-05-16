'use client'

export default function SimpleButton({ children, text }) {
    return <button>{children || text}</button>;
}
  