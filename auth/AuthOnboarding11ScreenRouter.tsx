import React from 'react';
import AuthOnboarding11Screens from './AuthOnboarding11Screens';

export default function AuthOnboarding11ScreenRouter(){
  const route=window.location.hash.replace(/^#/,'');
  const key=route.replace(/^auth-/,'');
  return <AuthOnboarding11Screens screen={key || 'splash'} />;
}
