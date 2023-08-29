function CardsView({cards}) {
    return (
      <ul className='list'>
        {cards.map((card, index) =>
        <li className='shop-card' key={index}>
          <h2 className='title'>{card.name}</h2>
          <p className='desc'>{card.color}</p>
          <figure><img src={card.img}></img></figure>         
          
          <div className='cta'>
          <p className='price'>$ {card.price}</p>
          <button className='btn'>Add to cart</button>
          </div>

        </li>)}    
      </ul>
    )
  }

  export default CardsView;
 

