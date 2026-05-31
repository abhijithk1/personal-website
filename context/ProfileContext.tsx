'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

type Profile = 'dev' | 'writing';

interface ProfileContextType {
  profile: Profile;
}

const ProfileContext = createContext<ProfileContextType>({ profile: 'dev' });

export function ProfileProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [profile, setProfile] = useState<Profile>('dev');

  useEffect(() => {
    const newProfile: Profile = pathname.startsWith('/writing') ? 'writing' : 'dev';
    setProfile(newProfile);
    document.documentElement.setAttribute('data-profile', newProfile);
  }, [pathname]);

  return (
    <ProfileContext.Provider value={{ profile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}
