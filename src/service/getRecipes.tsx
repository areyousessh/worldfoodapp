import { useAxios } from "@hooks/useAxios";
import { useEffect } from "react";

export function getRecipes() {
    const {makeRequest} = useAxios()
    const fetchData = async () => {
    try {
        const response = await makeRequest({
            url: '/recipes',
            method: 'get'
        })
        console.log(response.data)
        } catch (e: any) {
        console.log(e.message)
        }
    } 

    useEffect(() => {
        fetchData()
    }, [])
}