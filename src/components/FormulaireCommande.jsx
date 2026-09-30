import { useState, useEffect } from 'react'

export default function FormulaireCommande({ platSelectionne }) {
  const [nom, setNom] = useState("")
  const [plat, setPlat] = useState("")
  const [quantite, setQuantite] = useState(1)
  const [message, setMessage] = useState("")
  const [accepte, setAccepte] = useState(false)

  useEffect(() => {
    if(platSelectionne) setPlat(platSelectionne)
  }, [platSelectionne])
const [adresse, setAdresse] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if(nom.trim() === "") return alert("Veuillez entrer votre nom")
    if(plat === "") return alert("Veuillez choisir un plat")
    if(adresse.trim() === "") return alert("Veuillez entrer votre adresse")
    if(!accepte) return alert("Veuillez accepter les conditions")

    const texte = `Bonjour Mr Chef, je suis ${nom}, je veux ${quantite}x ${plat}. Message: ${message}. Adresse: ${adresse}`
    const url = `https://wa.me/22956758370?text=${encodeURIComponent(texte)}`
    window.location.href = url
  }

  return (
    <section id="form-commande" style={{padding:'40px', background:'white', margin:'30px 0', borderRadius:'15px'}}>
      <h2>Commander un plat</h2>
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'10px', maxWidth:'400px', margin:'auto'}}>
        <input id='input-nom' value={nom} onChange={e => setNom(e.target.value)} placeholder='Votre nom' />
        <input value={adresse} onChange={e => setAdresse(e.target.value)} placeholder='Votre quartier / adresse' />
        <select value={plat} onChange={e => setPlat(e.target.value)}>
          <option value="">Choisir un plat</option>
          <option value="Riz au poulet">Riz au poulet</option>
          <option value="Poisson braisé">Poisson braisé</option>
          <option value="Poulet braisé">Poulet braisé</option>
          <option value="Spaghetti bolognaise">Spaghetti</option>
          <option value="Attiéké poisson">Attiéké poisson</option>
          <option value="Légume">Légume</option>
          <option value="Riz gras + poulet">Riz gras + poulet</option>
        </select>
        <input type='number' min={1} value={quantite} onChange={e => setQuantite(e.target.value)} />
        <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder='Votre avis / précision' />
        <label><input type='checkbox' checked={accepte} onChange={e => setAccepte(e.target.checked)} /> J'accepte les conditions</label>
        <button type='submit' className="btn primary">Commander sur WhatsApp</button>
      </form>
    </section>
  )
}
