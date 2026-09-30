import { useState } from 'react'
import './App.css'
import PlatDuJour from "./components/PlatDuJour"
import FormulaireCommande from "./components/FormulaireCommande"

const menu = [
  { name: "Plat Mr Chef", category: "plats", description: "Un plat généreux avec accompagnements.", price: "2500F", image: "/images/plat4.jpg" },
  { name: "Burger maison", category: "sandwichs", description: "Sandwich préparé avec soin.", price: "1500F", image: "/images/plat5.jpg" },
  { name: "Spécialité du chef", category: "plats", description: "Assiette savoureuse de la maison.", price: "2500F", image: "/plat2.jpg" },
  { name: "Douceur pâtissière", category: "patisserie", description: "Gâteaux pour toutes occasions.", price: "2000F", image: "/images/plat1.jpg" },
  { name: "Poisson braisé", category: "plats", description: "Poisson frais braisé avec frites.", price: "2500F", image: "/images/poisson.jpg" },
  { name: "Poulet braisé", category: "plats", description: "Poulet grillé, frites et crudités.", price: "3000F", image: "/images/poulet.jpg" },
];

function App() {
  const [filtre, setFiltre] = useState('all')
  const [menuOpen, setMenuOpen] = useState(false)
  const [platChoisi, setPlatChoisi] = useState("")

  const commanderWhatsApp = (plat) => {
    const message = `Bonjour Mr Chef, je veux commander : ${plat}.`;
    const url = `https://wa.me/22956758370?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  }

  const platsFiltres = filtre === 'all' ? menu : menu.filter(i => i.category === filtre)

  return (
    <>
      <header className="header">
        <a href="#" className="logo" style={{display:'flex', alignItems:'center'}}>
          <img src="/images/logo.png" alt="Mr Chef" style={{height:'45px'}} />
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#accueil">Accueil</a>
          <a href="#menu">Menu</a>
          <a href="#formations">Formations</a>
          <a href="#livraison">Livraison</a>
          <a href='#services'>Services</a>
          <a href="#contact">Contact</a>
          <a href="#PlatDuJour">Plat du jour</a>
        </nav>
      </header>

      <main>
        <div id="PlatDuJour"></div>
        <PlatDuJour onChoisirPlat={setPlatChoisi} />
        <section className="hero" id="accueil">
          <div className="hero-content">
            <p className="eyebrow">MAISON DES PLATS RAPIDE & SANDWICH</p>
            <h1>We deliver to your Doorstep.</h1>
            <p>Le goût qui vous donne envie de revenir. Plats généreux préparés avec passion.</p>
            <div className="hero-buttons">
              <a href="#menu" className="btn primary">Découvrir le menu</a>
              <button className="btn secondary" onClick={() => commanderWhatsApp('une commande')}>Commander sur WhatsApp</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/plat2.jpg" alt="Mr Chef" />
          </div>
        </section>

        <div style={{background:'#c1121f', color:'white', textAlign:'center', padding:'12px', fontWeight:'bold', fontSize:'15px'}}>
          🚚 LIVRAISON DISPONIBLE - 11h à 24h - Sèmè-Podji et environs
        </div>

        <section className="section" id="menu">
          <div className="section-title">
            <p className="eyebrow">NOS SPÉCIALITÉS</p>
            <h2>Un plat pour chaque envie</h2>
          </div>
          <div className="filters">
            <button className={filtre==='all'?'filter active':'filter'} onClick={()=>setFiltre('all')}>Tous</button>
            <button className={filtre==='plats'?'filter active':'filter'} onClick={()=>setFiltre('plats')}>Plats</button>
            <button className={filtre==='sandwichs'?'filter active':'filter'} onClick={()=>setFiltre('sandwichs')}>Sandwichs</button>
            <button className={filtre==='patisserie'?'filter active':'filter'} onClick={()=>setFiltre('patisserie')}>Pâtisserie</button>
          </div>
          <div className="cards">
            {platsFiltres.map((item, i) => (
              <article key={i} className="card">
                <img className="card-image" src={item.image} alt={item.name} />
                <div className="card-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span className="price">{item.price}</span>
                  <button className="btn primary" style={{marginTop:'10px', width:'100%'}} onClick={() => commanderWhatsApp(item.name + ' - ' + item.price)}>Commander</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section formations" id="formations" style={{background:'#fff7ed'}}>
          <div className="section-title">
            <p className="eyebrow">FORMATIONS</p>
            <h2>Apprendre c'est aujourd'hui, réussir demain !</h2>
          </div>
          <div className="formation-grid">
            <article className="formation-card"><h3>👨‍🍳 CHEF EXÉCUTIF</h3><p>Devenez un manager complet et performant en cuisine.</p></article>
            <article className="formation-card"><h3>🍳 CHEF CUISINIER</h3><p>Maîtrisez l'art culinaire et devenez un expert.</p></article>
            <article className="formation-card"><h3>💁‍♀️ HÔTESSE</h3><p>Accueil, service, étiquette et relation client.</p></article>
          </div>
        </section>

        <section className="section" id="livraison" style={{background:'white', borderTop:'2px dashed #c1121f'}}>
          <div className="section-title">
            <p className="eyebrow" style={{color:'#c1121f'}}>SERVICE DE LIVRAISON</p>
            <h2>On livre à votre porte</h2>
            <p>Commandez sur WhatsApp, livraison en 30-45 min</p>
          </div>
          <div className="service-grid">
            <article className="service-card"><span>📍</span><h3>Sèmè-Podji - Mairie</h3><p><strong>500F</strong> de livraison</p></article>
            <article className="service-card"><span>🛵</span><h3>Sèmè-Kpodji / Ekpè</h3><p><strong>1000F</strong> de livraison</p></article>
            <article className="service-card"><span>🏠</span><h3>Agblangandan / Cotonou</h3><p><strong>1500F-2000F</strong> selon distance</p></article>
          </div>
          <div style={{textAlign:'center', marginTop:'20px'}}>
            <button className="btn primary" onClick={() => commanderWhatsApp('une livraison')}>🚚 Commander avec livraison</button>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-title">
            <p className="eyebrow">NOS SERVICES</p>
            <h2>Plus qu'un restaurant</h2>
          </div>
          <div className="service-grid">
            <article className="service-card"><span>🍽️</span><h3>Gastronomie variée</h3><p>Plats locaux et internationaux.</p></article>
            <article className="service-card"><span>🍰</span><h3>Pâtisserie</h3><p>Gâteaux et viennoiseries.</p></article>
            <article className="service-card"><span>🥫</span><h3>Sauces variées</h3><p>Sauces savoureuses prêtes à l'emploi.</p></article>
            <article className="service-card"><span>👩‍🏫</span><h3>Cours de cuisine</h3><p>Apprenez nos recettes comme un pro !</p></article>
          </div>
        </section>
        <FormulaireCommande platSelectionne={platChoisi} />

        <section className="contact" id="contact" style={{background:'#111', color:'white', padding:'40px', display:'block'}}>
          <div>
            <p style={{color:'orange'}}>CONTACTEZ-NOUS</p>
            <h2 style={{color:'white', fontSize:'24px', margin:'10px 0px'}}>Nous sommes situés à SÈMÈ PODJI</h2>
            <p style={{color:'white'}}>📍 Dans la von de l'ancienne maternité après la mairie.</p>
            <p style={{color:'white', marginTop:'10px'}}><strong>Apprenants:</strong> 8h à 11h | <strong>Restaurant:</strong> 11h à 24h</p>
          </div>
          <div style={{marginTop:'20px'}}>
            <a href="https://wa.me/22956758370" style={{color:'white', display:'block', marginBottom:'5px'}}>📞 01 56 75 83 70 (WhatsApp)</a>
            <a href="tel:0153428248" style={{color:'white', display:'block', marginBottom:'5px'}}>📞 01 53 42 82 48</a>
            <a href="tel:0192624922" style={{color:'white', display:'block'}}>📞 01 92 62 49 22</a>
          </div>
        </section>
      </main>

      <footer style={{textAlign:'center', padding:'20px'}}><p>© {new Date().getFullYear()} Mr Chef — La qualité, l'hygiène et votre satisfaction sont notre priorité !</p></footer>
    </>
  )
}
export default App
