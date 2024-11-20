interface ButtonAProps {
  onClick: () => void;
  id: string;
  children: React.ReactNode;
}

export default function ButtonA({ onClick, children, id }: ButtonAProps) {
  return (
    <button onClick={onClick} id={id} className='button-a'>
      {children}
    </button>
  );
}
