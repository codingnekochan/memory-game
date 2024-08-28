import PropTypes from 'prop-types'

export default function Main({ children }) {
    return <main className="w-full flex flex-wrap items-center gap-4 p-4 bg-gray-950">
        {children}
    </main>
}

Main.propTypes = {
    children: PropTypes.any,
}