import { useCallback, useEffect, useRef } from "react";
export default function useThrottle(fn:Function, delay:number, dep = []) {
    const { current } = useRef({ fn, timer: 0 });
    useEffect(function () {
      current.fn = fn;
    }, [fn]);
  
    return useCallback(function f(...args:any) {
      if (!current.timer) {
        current.timer = window.setTimeout(() => {
           current.timer=0;
        }, delay);
        current.fn(...args);
      }
    }, dep);
  }