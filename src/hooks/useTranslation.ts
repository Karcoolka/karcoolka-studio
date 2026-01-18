import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { translations, type TranslationKey } from '../locales/translations';

export function useTranslation() {
  const language = useSelector((state: RootState) => state.language.currentLanguage);

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  return { t, language };
}