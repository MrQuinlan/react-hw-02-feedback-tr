import css from './Container.module.css';

const Container = ({ children }) => {
  return <section className={css.container}>{children}</section>;
};

export default Container;
