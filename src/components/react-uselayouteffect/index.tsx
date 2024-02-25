import { useLayoutEffect, useState } from "react"

const userIds = [1,2]

const UseLayoutEffectDemo = () => {
    const [userId, setUserId] = useState(userIds[0])
    const [isAdmin, setIsAdmin] = useState(true)

    const now = performance.now()
    while (performance.now() - now < 200) {
        //do something
    }

    useLayoutEffect(() => {
        setIsAdmin(userId === userIds[0])
    }, [userId])

    const handleChange = () => {
        const otherId = userIds.find(id => id !== userId)
        setUserId(otherId)
    }

  return (
    <div>
        <p>userId: {userId}</p>
        <p>Admin: {isAdmin ? 'true' : 'false'}</p>
        <button onClick={handleChange}>Change User</button>
    </div>
  )
}

export default UseLayoutEffectDemo