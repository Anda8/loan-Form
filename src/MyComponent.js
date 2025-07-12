export default function MyComponent({ title, name, value, type, handleChange }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{title}</label>
      <input
        className="form-control"
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        autoComplete="off"
        required
      />
    </div>
  );
}
