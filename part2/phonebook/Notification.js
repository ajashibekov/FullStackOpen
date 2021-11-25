const Notification = ({info}) => {
    if(info === null) return null
    const style = {
        color: info.color,
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }
    return <p style={style}>{info.message}</p>
}

export default Notification