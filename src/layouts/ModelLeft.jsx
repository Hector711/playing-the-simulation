export default function ModelLeft({ children, id, title, className }) {
  return (
    <aside className={`aside-left ${className}`} id={id}>
      {title && (
        <>
          <h2 className='impact '>{title}</h2>
          <hr />
        </>
      )}
      {children}
    </aside>
  );
}
