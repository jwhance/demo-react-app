
const InputBox = ({ name, type, id, label, value, onChange }) => {

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
            />
        </>
    )
}

export default InputBox;