import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { history } from 'utils/history';

export function Search() {
  const { t } = useTranslation();
  const [term, setTerm] = React.useState('');
  const handleSearch = () => {
    if (term) {
      history.push(`/users/${term}`);
    }
  };
  return (
    <div className="nav-search-wrapper">
      <input
        placeholder={t(translations.navbar.searchPlaceholder())}
        type="text"
        className="nav-search"
        onKeyDown={(e: any) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
        onChange={e => setTerm(e.target.value.trim())}
      />
      <button className="nav-search-icon-wrapper" onClick={handleSearch}>
        <FiSearch className="nav-search-icon" size={24} />
      </button>
    </div>
  );
}
