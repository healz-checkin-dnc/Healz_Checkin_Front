import { useLocation } from 'react-router-dom';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import CheckinForm from '../src/components/CheckinForm/CheckinForm';

export default function CheckinPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get('token');

  return (
    <>
      <Header />
      <CheckinForm token={token} />
      <Footer />
    </>
  );
}
