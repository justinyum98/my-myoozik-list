import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react';

type HeaderProps = {
  user?: any;
  loading: boolean;
};

const Header = ({ user, loading }: HeaderProps) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          {!loading &&
            (user ? (
              <>
                <li>
                  <Link href="/profile">
                    <a>Client-rendered profile</a>
                  </Link>
                </li>
                <li>
                  <a onClick={() => signOut()}>Sign out</a>
                </li>
              </>
            ) : (
              <li>
                <a
                  onClick={() =>
                    signIn('auth0', undefined, { prompt: 'login' })
                  }
                >
                  Sign in
                </a>
              </li>
            ))}
        </ul>
      </nav>

      <style jsx>{`
        header {
          padding: 0.2rem;
          color: #fff;
          background-color: #333;
        }
        nav {
          max-width: 42rem;
          margin: 1.5rem auto;
        }
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }
        li {
          margin-right: 1rem;
        }
        li:nth-child(2) {
          margin-right: auto;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        button {
          font-size: 1rem;
          color: #fff;
          cursor: pointer;
          border: none;
          background: none;
        }
      `}</style>
    </header>
  );
};

export default Header;
