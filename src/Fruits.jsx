const Fruit=()=>{

    const fruits= ["Apple", "Banana", "Cherry"];

    return(

        <ul>
            {


                fruits.map(fruit=>(
                    <li key={fruit}>{fruit}</li>
                ))
            }
        </ul>
    )

}
export default Fruit;