function ListView({items}) {
  return (
    <ul className='list'>
      {items.map((item,index) =>
      <li className='shop-item' key={index}>
        <figure className='thumb'><img src={item.img}></img></figure>     
        <h2 className='title'>{item.name}</h2>
        <p className='desc'>{item.color}</p>
        <p className='price'>$ {item.price}</p>
        <button className='btn'>Add to cart</button>
     </li>)}
    </ul>
  )
}

export default ListView;