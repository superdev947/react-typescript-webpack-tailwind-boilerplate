import { FC } from 'react'
import CountryFlag from 'react-country-flag'
import { useTranslation } from 'react-i18next'

import { Dropdown } from './ui'

interface LanguageOption {
  code: string
  name: string
  countryCode: string
}

const languages: LanguageOption[] = [
  { code: 'en', name: 'English', countryCode: 'US' },
  { code: 'es', name: 'Español', countryCode: 'ES' },
  { code: 'fr', name: 'Français', countryCode: 'FR' },
  { code: 'de', name: 'Deutsch', countryCode: 'DE' },
  { code: 'zh', name: '中文', countryCode: 'CN' }
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
          <CountryFlag
            countryCode={currentLanguage.countryCode}
            svg
            style={{ width: '1.5em', height: '1.5em' }}
            title={currentLanguage.name}
          />
          <span>{currentLanguage.name}</span>
        </div>
      }
      items={languages.map(lang => ({
        label: (
          <span className='flex items-center space-x-2'>
            <CountryFlag
              countryCode={lang.countryCode}
              svg
              style={{ width: '1.5em', height: '1.5em' }}
              title={lang.name}
            />
            <span>{lang.name}</span>
          </span>
        ),
        onClick: () => handleLanguageChange(lang.code)
      }))}
    />
  )
}

export default LanguageSwitcher
