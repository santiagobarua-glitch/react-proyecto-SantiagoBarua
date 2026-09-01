import { useState } from "react";

function Likes() {
    const [likes, setLike] = useState(false);

    return (
        <div>
            <button
                type="button"
                className={likes ? "counter" : "click"} 
                onClick={() => setLike((likes) => !likes)}
            >
                {likes ? "me gusta" : "no me gusta"}
            </button>
        </div>
    )
}

export default Likes