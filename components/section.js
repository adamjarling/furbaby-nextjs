export default function Section({ children }) {
  return (
    <section className="py-10 sm:py-20 px-4 lg:px-0 flex flex-col items-center">
      <div className="container max-w-4xl text-justify">{children}</div>
    </section>
  );
}
