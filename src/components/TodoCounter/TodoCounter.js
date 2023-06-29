export function TodoCounter({ total, completed }) {
  return (
    <h1 className="TodoCounter">
      has completado <span>{completed}</span> de <span>{total}</span> TODOS
    </h1>
  );
}