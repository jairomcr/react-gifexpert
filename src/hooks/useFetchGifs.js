import { useEffect, useState } from 'react';
import { getGitfs } from '../helpers/getGitfs';

export const useFetchGifs = (category) => {
   const [state, setState] = useState({
      data:[],
      loading:true,
   });

   useEffect(() => {
      getGitfs(category).then((user)=>{
        setTimeout(()=>{
            setState({
              data:user,
              loading:false,
            })
        },3000);
      });
   }, [category])

   return state;
   
}
