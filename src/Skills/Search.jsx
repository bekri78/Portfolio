import React from 'react';
import { Input } from "antd";
const { Search } = Input;

function Searche (props){
    const { searchValue, setSearchValue } = props;
    return (
        <div style={{
            width:'100%'
        }}>
              <Search
        
                 value={searchValue}
                  placeholder="Rechercher une compétence"
                  onChange={setSearchValue}
                  enterButton    
                />
        </div>
    );
};

export default Searche;