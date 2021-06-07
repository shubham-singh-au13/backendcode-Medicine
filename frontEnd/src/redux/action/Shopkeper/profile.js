
import { PROFILE } from './../../actionTypes/index';
const SHOP_KEPER={
    PROFILE:(dispatch,store)=>{
        return fetch('http://localhost:2000/shoapkeper/profile',{
            headers:{
                token:store().Token
            }
        }).then(d=>d.json()).then(d=>{
            dispatch({
                type:PROFILE.SHOPKEPER,
                payload:d
            })
        })
    }
}
export default SHOP_KEPER