import {
  Bike,
  ChevronRight,
  Flame,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Settings,
  ShieldCheck,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { products } from './data/products';
import { store, whatsappLink } from './data/store';

const categories = [
  { label: 'Bikes', icon: Bike },
  { label: 'Peças', icon: Settings },
  { label: 'Acessórios', icon: ShieldCheck },
  { label: 'Ofertas', icon: Flame },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const defaultWhatsapp = whatsappLink(
    'Olá! Vim pelo site da Stherel Bikes e gostaria de saber mais sobre os produtos disponíveis.',
  );

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Stherel Bikes">
          <img src="/logo-stherel.png" alt="Stherel Bikes" />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#categorias">Categorias</a>
          <a href="#destaques">Destaques</a>
          <a href="#loja">Loja</a>
          <a className="nav-cta" href={defaultWhatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </nav>

        <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Abrir menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {menuOpen && (
          <div className="mobile-menu">
            <a href="#categorias" onClick={() => setMenuOpen(false)}>Categorias</a>
            <a href="#destaques" onClick={() => setMenuOpen(false)}>Destaques</a>
            <a href="#loja" onClick={() => setMenuOpen(false)}>Loja</a>
          </div>
        )}
      </header>

      <section className="hero" id="top">
        <div className="hero__overlay" />
        <div className="hero__content">
          <span className="eyebrow">STHEREL BIKES • ARACAJU</span>
          <h1>Sua próxima bike está aqui.</h1>
          <p>Bikes, peças e acessórios para quem vive o pedal.</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#destaques">
              Ver destaques <ChevronRight size={18} />
            </a>
            <a className="button button--ghost" href={defaultWhatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section compact" id="categorias">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ENCONTRE RÁPIDO</span>
            <h2>O que você procura?</h2>
          </div>
        </div>

        <div className="category-strip">
          {categories.map(({ label, icon: Icon }) => (
            <a
              key={label}
              className="category-card"
              href={whatsappLink(`Olá! Vim pelo site e quero consultar ${label.toLowerCase()} disponíveis na Stherel Bikes.`)}
              target="_blank"
              rel="noreferrer"
            >
              <Icon size={22} />
              <span>{label}</span>
              <ChevronRight size={18} />
            </a>
          ))}
        </div>
      </section>

      <section className="section" id="destaques">
        <div className="section-heading">
          <div>
            <span className="eyebrow">VITRINE</span>
            <h2>Destaques da loja</h2>
          </div>
          <a href={defaultWhatsapp} target="_blank" rel="noreferrer">Consultar estoque</a>
        </div>

        <div className="product-strip">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} loading="lazy" />
              <div className="product-card__content">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.tag}</p>
                  <strong>{product.price}</strong>
                </div>
                <a
                  href={whatsappLink(`Olá! Vi ${product.name} no site da Stherel Bikes e gostaria de saber a disponibilidade e o valor.`)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Tenho interesse em ${product.name}`}
                >
                  <ChevronRight size={20} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="quick-cta">
        <div>
          <span className="eyebrow">ESTOQUE ATUALIZADO PELO WHATSAPP</span>
          <h2>Procurando uma peça ou modelo específico?</h2>
        </div>
        <a className="button button--primary" href={defaultWhatsapp} target="_blank" rel="noreferrer">
          Consultar agora <MessageCircle size={18} />
        </a>
      </section>

      <section className="section store" id="loja">
        <div className="store__copy">
          <span className="eyebrow">LOJA FÍSICA</span>
          <h2>Stherel Bikes</h2>
          <p><MapPin size={18} /> {store.address}</p>
        </div>

        <div className="store__actions">
          <a className="button button--ghost" href={store.maps} target="_blank" rel="noreferrer">
            <MapPin size={18} /> Como chegar
          </a>
          <a className="button button--ghost" href={store.instagram} target="_blank" rel="noreferrer">
            <Instagram size={18} /> Instagram
          </a>
        </div>
      </section>

      <footer>
        <img src="/logo-stherel.png" alt="Stherel Bikes" />
        <span>© 2026 Stherel Bikes</span>
        <span>Desenvolvido pela MBV Studio</span>
      </footer>

      <a className="floating-whatsapp" href={defaultWhatsapp} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp">
        <MessageCircle size={24} />
      </a>
    </main>
  );
}

export default App;
