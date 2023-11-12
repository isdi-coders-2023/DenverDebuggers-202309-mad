import './error.scss';
export function ErrorComponent() {
  return (
    <div className="error-container">
      <div className="error-img-container">
        <img
          src="./error-img.png"
          alt="Homer doing doh expression"
          height="260"
          width="260"
        />
      </div>
      <div className="error-text-container">
        <p>DO-OH ERROR 404</p>
        <p>La página no ha sido encontrada</p>
      </div>
    </div>
  );
}
