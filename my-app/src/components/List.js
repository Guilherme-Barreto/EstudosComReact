import Item from "./Item";

function list() {
    return (
        <>
            <h2>Minha lista</h2>
            <ul>
                <Item marca="fiat" lançamento={2012}/>
                <Item/>
            </ul>
        </>
    )
}   

export default list