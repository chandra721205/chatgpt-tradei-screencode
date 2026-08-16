import { useEffect, useState, type ComponentType } from 'react';
import { transporterRoutes } from './modules/transporter/Transporter15Screens';

export default function Transporter15ScreenRouter(){
  const [route,setRoute]=useState(()=>window.location.hash.replace(/^#/,'')||'transporter-2041-380');
  useEffect(()=>{const h=()=>setRoute(window.location.hash.replace(/^#/,'')||'transporter-2041-380');window.addEventListener('hashchange',h);return()=>window.removeEventListener('hashchange',h)},[]);
  const Screen: ComponentType<{onBack?:()=>void}>|undefined=transporterRoutes[route];
  if(!Screen){window.location.hash='transporter-2041-380';return null;}
  return <Screen onBack={()=>window.history.back()}/>;
}
