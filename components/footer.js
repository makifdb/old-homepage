import { social, author } from '../site.config';
import Link from 'next/link';

export default function Header() {
  return (
    <footer className="my-4">
      If you have any questions or feedback, please feel free to share them with me on
      <Link href={social.twitter}>
        <a> Twitter </a>
      </Link>
      or
      <a href={'mailto:' + author.email}> Email </a>
    </footer>
  );
}
