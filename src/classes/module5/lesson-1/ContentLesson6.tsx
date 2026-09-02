import ClicksCount from "./ClicksCount"
import RegresiveCount from "./RegresiveCount"


function ContentEj1() {
    return (
        <>
         <ClicksCount/>
        <RegresiveCount initialSeconds={20}/>
        </>
    )
}

export {ContentEj1}