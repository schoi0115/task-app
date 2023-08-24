import Button from './Button'
const Header = ({ title, onAdd, show }) => {
    return (
        <header className='header'>
            <h1>
                {title}
            </h1>
            <Button
                onClick={onAdd}
                color={show ? "red" : "green"}
                text={show ? 'close' : 'add'}
            />

        </header>

    )
}
Header.defaultProps = {
    title: 'Task Tracker',
}
export default Header