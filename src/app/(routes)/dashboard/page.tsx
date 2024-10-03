"use client"

import { useMutation } from "@tanstack/react-query"
import { Logout } from "../../_server_components/(users)/userActions"


function Dashboard() {
    const mutation = useMutation({
        mutationFn: async () => {
            await Logout()
        },
    })

    return (
        <>
            <button disabled={mutation.isPending} onClick={() => mutation.mutate()}>Deslogar</button>
        </>
    )
}

export default Dashboard