export const TextHighlight = ({ text, query }: { text: string; query?: string }) => {
  if (!query) return <>{text}</>;
  const regex = new RegExp(`(${query})`, "ig");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="highlighted">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
};