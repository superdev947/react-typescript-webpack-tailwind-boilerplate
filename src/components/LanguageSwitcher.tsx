import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Dropdown } from './ui'

interface LanguageOption {
  code: string
  name: string
  flag: string
}

const languages: LanguageOption[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
]

const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation()

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode)
  }

  return (
    <Dropdown
      trigger={
        <div className='flex items-center space-x-2'>
          <span className='text-lg'>{currentLanguage.flag}</span>
          <span>{currentLanguage.name}</span>
        </div>
      }
      items={languages.map(lang => ({
        label: `${lang.flag} ${lang.name}`,
        onClick: () => handleLanguageChange(lang.code),
      }))}
    />
  )
}

export default LanguageSwitcher 