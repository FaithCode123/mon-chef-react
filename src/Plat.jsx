function Plat ({nom, prix, images, disponible, promotion}) {
    return (
        <article style={{border: '1px solid gray', padding: '10px', margin: '10px'}}>
            <img src={images} alt={nom} width="200"/> 
            <h2> {nom} </h2>
            <p> {prix} FCFA</p>
            <p>{disponible ? "✅ Disponible" : "❌ Indisponible"}</p>
             {promotion && (
                <p>🔥 Ce plat est en promotion !</p>
            )}
            
        </article>
    );
}

export default Plat