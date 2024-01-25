import { Helmet } from 'react-helmet';

export const Counter = () => {
  return (
    <>
      <Helmet>
      <script language="javascript" type="text/javascript" src="//counter1.fc2.com/counter.php?id=13297215&main=1"></script>
      </Helmet>
      <img src="//counter1.fc2.com/counter_img.php?id=13297215&main=1" />
    </>
  )
}