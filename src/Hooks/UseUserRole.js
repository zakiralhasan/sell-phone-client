
import { useState, useEffect } from "react"

const useUserRole = (email) => {
    const [userRole, setUserRole] = useState('')
    const [userLoading, setUserLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_API_URL}/user?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    setUserRole(data?.role)
                    setUserLoading(false)
                })
        }
    }, [email])

    return [userRole, userLoading]
}
export default useUserRole;