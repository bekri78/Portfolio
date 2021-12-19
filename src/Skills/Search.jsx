import React from 'react';
import { Input } from "antd";
import { useTranslation } from "react-i18next";
const { Search } = Input;

function Searche (props){
    const [t] = useTranslation("global");
    const { searchValue, setSearchValue } = props;
    return (
        <div style={{
            width:'100%'
        }}>
              <Search
        
                 value={searchValue}
                  placeholder={t("competence.recherche")}
                  onChange={setSearchValue}
                  enterButton    
                />
        </div>
    );
};

export default Searche;