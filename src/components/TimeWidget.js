const TimeWidget = ({ currentTime, dataTestid }) => {
    return (
        <h1 data-testid={dataTestid}>{currentTime}</h1>
    )
};

export default TimeWidget;