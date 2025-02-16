import { create } from "zustand";
interface storeType{
    count:number,
    setCount:(count:number)=>void,
    increase:()=>void,
    decrease:()=>void,
    showMore:boolean,
    setShowMore:(showMore:boolean)=>void
}
const useDataStore = create<storeType>((set) => ({
  count: 0,
  setCount:(count:number)=>set({count:count}),
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count > 0 ? state.count - 1 : 0 })),
  showMore:false,
  setShowMore:(showMore:boolean)=>set({showMore:showMore})
}));

export default useDataStore;
