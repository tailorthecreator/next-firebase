import toast from 'react-hot-toast';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Link prefetch={false} href={{
        pathname: '/[username]',
        query: { username: 'jeffd23' },
      }}>
        Jeff's profile
        </Link>
    </div>
  );
}