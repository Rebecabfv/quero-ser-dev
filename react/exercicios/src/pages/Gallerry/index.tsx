import { Link } from "react-router-dom";
import { ImageGallerry } from "../../components/ImageGallerry";

export function Gallerry() {
  return (
    <div>
      <ImageGallerry />
      <Link to="/">Voltar para o home</Link>
    </div>
  );
}
