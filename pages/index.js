import Link from 'next/link';
import { author, social } from '../site.config';

export default function Home() {
  return (
    <div className="site-container text-xl">
      <div className="space-y-6">
        <h1 className="text-6xl font-bold text-white text-center my-10">
          👋🏻️ Hi, I'm <strong className="text-green-800">Mehmet Akif</strong>
        </h1>
        <p className="text-center">
          I am a <strong>Software Developer</strong> interested in computer systems, automation,
          internet of things, platforms and developer tooling. For more info about my professional
          career, visit my <a href={social.linkedin}>LinkedIn</a> profile. The best way to reach me
          is to DM me on <a href={social.twitter}>Twitter</a>. If that doesn't work out, email me at{' '}
          <a href={'mailto:' + author.email}>{author.email}</a>.
        </p>
        <ul className="list-disc pl-8">
          <li className="pb-4">
            02/2021
            <Link href="/blog/bir-miktar-%C3%BC%C5%9Fenge%C3%A7lik-ve-taray%C4%B1c%C4%B1-eklentisi-yazmaya-h%C4%B1zl%C4%B1-102-bir-giri%C5%9F">
              <a className="pl-3">
                Bir Miktar Üşengeçlik ve Tarayıcı Eklentisi Yazmaya Hızlı(102) Bir Giriş
              </a>
            </Link>
          </li>
          <li>
            01/2021
            <Link href="https://makifdb.medium.com/raspberry-pi-%C3%BCzerinde-zoom-go-vim-visual-studio-code-ve-minecraft-691254c9a918">
              <a className="pl-3">
                Raspberry Pi üzerinde Zoom, Go, Vim, Visual Studio Code ve Minecraft
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
