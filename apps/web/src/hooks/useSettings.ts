import { defaultSettings } from 'common/constants/settings';
import { Settings } from 'common/types/configStore';
import { useEffect, useState } from 'react';

import { getInitConfigFromStore, updateConfigStore } from '@/utils';

export const useSettings = () => {
  const [settings, setSettings] = useState<Settings>(() => getInitConfigFromStore('settings', defaultSettings));

  const chnageSettings = (newSettings: Partial<Settings>) => {
    setSettings(pre => ({ ...pre, ...newSettings }));
  };

  useEffect(() => {
    updateConfigStore('settings', settings);
  }, [settings]);

  return {
    settings,
    chnageSettings
  };
};
