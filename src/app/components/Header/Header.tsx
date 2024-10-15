import styles from './Header.module.css'

interface HeaderProps {
  title: string
}
//TODO: improve styling for this component- currently generic styling set
export default function Header({ title }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
    </header>
  )
}
