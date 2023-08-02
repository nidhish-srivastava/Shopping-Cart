import storeItems from '../data.json'
import StoreItem from './StoreItem'

function Store() {
  return (
    <>
    <div className="main-container">
        {storeItems.map(e=>(
            <div className="item-card" key={e.id} >
                <StoreItem {...e} />
            </div>
        ))}
    </div>
    </>
  )
}

export default Store