import React, { useState } from 'react';
import useDarkmode from '../hooks/useDarkMode';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function DarkmodeSwitch() {
  const [colorTheme, setTheme] = useDarkmode();
  const [darkMode, setDarkmode] = useState<boolean>(colorTheme === 'light' ? true : false);

  const toggleDarkmode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkmode(checked);
  };

  return (
    <>
      <div>
        <DarkModeSwitch checked={darkMode} onChange={toggleDarkmode} size={56} />
      </div>
    </>
  );
}