import { Link, Outlet } from 'react-router-dom';
import SinglePostMuvie from '../../components/SinglePostMovie/SinglePostMovie';
import css from './single-post-page.module.css';

const SinglePostPage = () => {
  return (
    <div>
      <SinglePostMuvie />
    </div>
  );
};

export default SinglePostPage;
