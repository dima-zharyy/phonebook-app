import { useDocumentTitle } from 'hooks/useDocumentTitle';
import { Link } from 'react-router-dom';
import css from './NotExist.module.css';

export const NotExist = () => {
  useDocumentTitle('404');

  return (
    <section className={css.page_404}>
      <div className={css.four_zero_four_bg}>
        <h1 className={css.text_404}>404</h1>
      </div>
      <div className={css.content_box_404}>
        <h3>Look like you're lost</h3>
        <p>the page you are looking for is not available!</p>
        <Link to="/" className={css.link_404}>
          Go to Home
        </Link>
      </div>
    </section>
  );
};
