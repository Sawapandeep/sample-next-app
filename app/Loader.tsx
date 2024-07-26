
import { useEffect } from 'react'

export default function Loader() {
    useEffect(() => {
        async function getLoader() {
            const { grid } = await import('ldrs')
            grid.register()
        }
        getLoader()
    }, [])
    return <l-grid size="60" speed="1.5" color="black"></l-grid>
}