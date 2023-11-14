//axios基础的封装
import axios from 'axios'
export function httpInstance(){
   const res= axios.get({url:'/posts'});
   return res
}
