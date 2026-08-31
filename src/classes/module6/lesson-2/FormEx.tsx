import { useFormStore } from "./FormSlice"

function Form() {
    const inputName = useFormStore((state) => state.inputName)
    const inputValue = useFormStore((state) => state.inputValue)
    const form = useFormStore((state) => state.form)
    const name = useFormStore((state) => state.name)

    return (
        <div>
            <form onClick={(e) => e.preventDefault()}>
                <input 
                    value={inputValue} 
                    onChange={(e) => inputName(e.target.value)} 
                    placeholder="Escribe tu nombre"
                />
                <button onClick={form}>guardar</button>
            </form>
            <div>
                <span>bienvenido {name}</span>
            </div>
        </div>
    )
}

export default Form
