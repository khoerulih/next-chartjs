import { Button } from 'react-bootstrap';

interface HeaderPageProps {
  title: string;
}

export default function HeaderPage() {
  return (
    <section className="header-page">
      <Button>Login</Button>
    </section>
  );
}
