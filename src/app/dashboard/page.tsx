"use client"

import { useMutation } from "@tanstack/react-query"
import PocketBase from 'pocketbase'
import { redirect } from "next/navigation"
import { pbUrl } from "../lib/pBUrl"
import { cookies } from "next/headers"
import { Logout } from "../actions"


const pb = new PocketBase(pbUrl)
function Dashboard() {
    const mutation = useMutation({
        mutationFn: async () => {
            await Logout()
        },
    })

    if (mutation.isSuccess) {
        redirect('/')
    }


    return (
        <button disabled={mutation.isPending} onClick={() => mutation.mutate()}>Deslogar</button>
    )
}

export default Dashboard