export default function ModelRight({ children, title, className, id }) {
  return (
    <aside className={`aside-right ${className}`} id={id}>
      {title ? (
        <>
          <header className='aside-header'>
            <h3 className='impact'>{title}</h3>
          </header>
          {/* <hr /> */}
          <section className='aside-section'>{children}</section>
        </>
      ) : (
        <>{children}</>
      )}
    </aside>
  );
}

