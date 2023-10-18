import './styles.css';

function DefaultLayout({ children }) {
  return (
    <div className="app-container">
      <header>Future Header</header>
      <main>{children}</main>
      <footer>Future Footer</footer>
    </div>
  );
}

export default DefaultLayout;
