import ClicksCount from "./ClicksCount"
import RegresiveCount from "./RegresiveCount"


function Content() {
    return (
        <>
         <ClicksCount/>
        <RegresiveCount initialSeconds={20}/>
        </>
    )
}

export default Content