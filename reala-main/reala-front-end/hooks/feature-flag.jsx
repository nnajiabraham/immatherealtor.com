import { useEffect, useState } from 'react';

export const FLAGS = {
  'USE_TAILWIND': 'USE_TAILWIND',
}

export const useFeatureFlag = (flagName, defaultValue) => {
  const [flagValue, setFlagValue] = useState(defaultValue);

  useEffect(() => {
    // Client-side only code
    if (typeof window !== 'undefined') {
      
      // Initialize feature flags on the window object
      window.featureFlags = window.featureFlags || {};
      window.featureFlags[flagName] = window.featureFlags[flagName] || defaultValue;

      // Function to update the React state
      const updateFlagValue = () => {
        setFlagValue(window.featureFlags[flagName]);
      };

      // Set initial flag value based on the global state
      updateFlagValue();

      // Listen to changes in the window.featureFlags object
      window.addEventListener('storage', updateFlagValue);

      // Cleanup
      return () => {
        window.removeEventListener('storage', updateFlagValue);
      };
    }
  }, [flagName, defaultValue]);

  return [flagValue, setFlagValue];
};
