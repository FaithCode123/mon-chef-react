function Produit () {
    const disponible = true;
    let message;
    
    return (
<div>
    <h2>Riz au poisson braisé</h2>
    <p>{disponible ? "Disponible" : "Indisponible"}</p>
</div>
    )
}

export default Produit 