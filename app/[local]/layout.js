export default function MainLayout({ modal, children }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
