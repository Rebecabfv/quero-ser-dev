import { Link } from "react-router-dom";
import { ImageGallery } from "../../components/ImageGallery";

export function Gallery() {
  return (
    <div>
      <ImageGallery />
      <Link to="/">Voltar para o home</Link>
    </div>
  );
}
