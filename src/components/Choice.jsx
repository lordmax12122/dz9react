function Choice({ selected }) {
    return <div>{selected && <h1>{selected}</h1>}</div>;
}

export default Choice;