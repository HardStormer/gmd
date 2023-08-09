import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

interface SearchFormProps {
    value: string;
    onChange?: (e: any) => any;
    type?: string;
}
const SearchForm: React.FC<SearchFormProps> = ({ value, onChange , type = 'submit' }) => {
    return (
        <input value={value} onChange={onChange} className="form-control me-2" type="search" placeholder="Поиск"  aria-label="Поиск"/>
    );
};


export const SearchFormChat: React.FC<SearchFormProps> = ({ value, onChange , type = 'submit' }) => {
    return (
        <div className="input-group rounded mb-3">
            <input value={value} onChange={onChange} type="search" className="form-control rounded" placeholder="Поиск комнат..." aria-label="Search"
                   aria-describedby="search-addon"/>
        </div>
    );
};
export default SearchForm;