import { useState } from 'react';
import data from '../data/ReferencesData.json';

export default function References(props) {
    const [index, setIndex] = useState(0);
    const reference = data.References[index];

    return (
        <div className="reference">
            <button onClick={() => {index <= 0? setIndex(data.References.length - 1) : setIndex(index - 1)}}>Previous</button>
            <h2>{reference.text}</h2>
            <button onClick={() => {index >= data.References.length - 1? setIndex(0) : setIndex(index + 1)}}>Next</button>
        </div>
    )
}