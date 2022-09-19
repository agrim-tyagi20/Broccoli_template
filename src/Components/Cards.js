import React from 'react'

const Cards = ({info,query}) => {
  return (
    <>
     <div className="container_data">
    
{
    info.filter((item)=> item.strCategory.toLowerCase().includes(query)).map((elem) => {
     
        return  <div key={elem.idDrink}> 
            <div className="cards" >
                <img src={elem.strDrinkThumb} alt="img" />
                <div className="category">
                    <h3>{elem.strCategory}</h3>

                </div>

                <div className="instruction">
                    <p>  <span style={{ fontWeight: "bold" }}>Instructions - </span>{elem.strInstructions}</p>

                </div>

            </div>

            </div>

       

    })
}

</div>
    </>
  )
}

export default Cards
