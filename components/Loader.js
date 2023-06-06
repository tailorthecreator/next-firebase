import styles from '@/styles/Home.module.css'

export default function Loader({ show }) {
    return show ? <div className="loader"></div> : null;
  }