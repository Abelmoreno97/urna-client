
import { useEffect, useState } from "react";
import Vote from "../../repositories/Vote";
import { useParams } from "react-router";

export default function useGetResponses() {
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(true)
    const { voteId } = useParams();
    const [data,setData]=useState([])
    
    useEffect(()=>{
      
       Vote.getResponses(voteId).then((res)=>{

       setData(res.data)
       setLoading(false)
     }).catch((err)=>{
        setError(err)
     })
    return ()=> setLoading(true);
  },[])
  return { data, error, loading}
}
