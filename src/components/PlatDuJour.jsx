import { useState, useEffect } from 'react'

const platsDuJour = {
  lundi: { nom: "Riz au poulet", prix: "2500 F", image: "/images/plat8.jpg", desc: "Notre spécialité du lundi" },
  mardi: { nom: "Poisson braisé", prix: "3000 F", image: "/images/poisson.jpg", desc: "Pêche du jour" },
  mercredi: { nom: "Poulet braisé", prix: "3500 F", image: "/images/poulet.jpg", desc: "Le préféré de nos clients" },
  jeudi: { nom: "Spaghetti bolognaise", prix: "1000 F", image: "/images/plat6.jpg", desc: "Fait maison" },
  vendredi: { nom: "Attiéké poisson", prix: "2000 F", image: "/images/plat2.jpg", desc: "Spécial week-end" },
  samedi: { nom: "Légume", prix: "1000 F", image: "/images/plat4.jpg", desc: "Pour bien fêter le week-end" },
  dimanche: { nom: "Riz gras + poulet", prix: "3000 F", image: "/images/plat7.jpg", desc: "Menu famille du dimanche" },
}

export default function PlatDuJour({onChoisirPlat}) {
  const [jour, setJour] = useState("");

  useEffect(() => {
    const jours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
    const aujourdHui = new Date().getDay() // 0 = dimanche
    setJour(jours[aujourdHui])
  }, [])

  const plat = platsDuJour[jour]

  if (!plat) return null

  return (
    <section style={{background: '#fff3e0', padding: '40px', textAlign: 'center', borderRadius: '15px', margin: '30px 0'}}>
      <h2 style={{color: '#ff6f00'}}>🔥 Plat du Jour - {jour}</h2>
      <img src={plat.image} alt={plat.nom} style={{width: '200px', borderRadius: '10px', margin: '15px 0'}} />
      <h3>{plat.nom} - {plat.prix}</h3>
      <p>{plat.desc}</p>
      <button onClick={() => {onChoisirPlat(plat.nom); document.getElementById("form-commande").scrollIntoView({behavior: "smooth"}); setTimeout(() => { document.getElementById("input-nom")?.focus();}, 600);}} style={{background: 'orange', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', marginTop: '10px'}} >
        Commander le plat du jour
      </button>
    </section>
  )
}
