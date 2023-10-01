

export const Division = ({numberOne, numberTwo}) => {
    return (
        <p>{numberOne} / {numberTwo} = {Math.round((numberOne / numberTwo) * 100) / 100}</p>
    );
}