import ErrorImage from '../../assets/images/404-Error-amico.png';
import { NavLink } from 'react-router-dom';

function Error() {
  return (
    <section className="error">
      <img src={ErrorImage} alt="erreur 404" className="error-image" />
      <h1 className="error-title">Erreur 404</h1>
      <p className="error-text">
        La page que vous demandez n'existe pas, ou n'a pas été trouvée.
      </p>
      <NavLink to="/" className="error-link">
        Retourner à l'accueil
      </NavLink>
    </section>
  );
}

export default Error;
