import React from 'react';
import CommissionAgent5Screens from './CommissionAgent5Screens';

export default function CommissionAgent5Router(){
  const route = window.location.hash.replace(/^#/, '');
  if (route === 'ca-alerts') return <CommissionAgent5Screens screen="alerts"/>;
  if (route === 'ca-tasks') return <CommissionAgent5Screens screen="tasks"/>;
  if (route === 'ca-profile') return <CommissionAgent5Screens screen="profile"/>;
  if (route === 'ca-staff') return <CommissionAgent5Screens screen="staff"/>;
  return <CommissionAgent5Screens screen="home"/>;
}
