import { useEffect, useState, type ComponentType } from "react";
import { supportRoutes } from "./Support10Screens";

type Props={onBack?:()=>void};
export default function Support10ScreenRouter(){
  const [route,setRoute]=useState(()=>window.location.hash.replace(/^#/,'')||'support-search');
  useEffect(()=>{const h=()=>setRoute(window.location.hash.replace(/^#/,'')||'support-search');window.addEventListener('hashchange',h);return()=>window.removeEventListener('hashchange',h)},[]);
  const key=route.replace(/^support-?/,'')||'search';
  const Screen:ComponentType<Props>|undefined=supportRoutes[key];
  if(!Screen){window.location.hash='support-search';return null;}
  return <Screen onBack={()=>window.history.back()}/>;
}
